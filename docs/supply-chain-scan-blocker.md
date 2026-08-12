# Supply-Chain Scan 머지 블로커 — 원인과 해소 절차

> `main` 으로 머지하려 할 때 나오는 오류:
> **"Supply-Chain Scan — Workflows cannot be required from a less visible repository"**
>
> 이 문서는 저장소를 fork network 에서 분리하는 작업 중에도 살아남도록 git 내용물로 남겨둡니다.
> (PR·이슈 같은 GitHub 메타데이터는 분리 시 전부 삭제됩니다.)

## TL;DR

`rinda-globe-dashboard` 는 **public** 인데, 조직 룰셋이 요구하는 스캔 워크플로는 **private** 저장소에 있습니다.
GitHub 은 대상 저장소보다 **가시성이 낮은** 저장소의 워크플로를 필수 검사로 요구하는 것을 금지합니다.
그래서 검사가 아예 스케줄되지 않고, 영원히 "대기 중" 상태로 머지가 막힙니다.

**저장소 코드로는 고칠 수 없습니다.** 조직 소유자 권한이 필요합니다.

## 근거 (확인된 사실)

| 확인 항목 | 값 |
|---|---|
| 룰셋 | `Supply-Chain Scan (required)` · id `20582782` · `enforcement: active` |
| 룰셋 출처 | Organization (`FINGU-GRINDA`) |
| 적용 대상 ref | `~DEFAULT_BRANCH`, `refs/heads/beta` |
| 요구 워크플로 | `.github/workflows/supply-chain-scan.yml` @ `refs/heads/main` |
| 워크플로 저장소 id | `1327537091` = **`FINGU-GRINDA/supply-chain-guard`** |
| 그 저장소 가시성 | **private** |
| 이 저장소 가시성 | **public** |
| 우회 가능 여부 | `current_user_can_bypass: "never"` |
| PR 상태 | `mergeable: true` / `mergeable_state: **blocked**` |

가시성 서열은 `public > internal > private` 이고, **워크플로가 있는 저장소가 대상 저장소보다 같거나 더 공개적**이어야 합니다.
지금은 `private < public` 이라 규칙 위반입니다.

### 저장소 안에서 고칠 수 없는 이유

룰셋은 워크플로를 **저장소 ID(`1327537091`)로 고정 참조**합니다.
이 저장소에 같은 이름(`.github/workflows/supply-chain-scan.yml`)의 워크플로를 추가해도 그 규칙을 만족시키지 못합니다.

## 왜 "supply-chain-guard 를 public 으로" 는 권장하지 않는가

가장 빨라 보이지만 **하지 마세요.**

해당 워크플로는 이렇게 실행됩니다.

```yaml
runs-on: [self-hosted, polinrider-scan]
on:
  pull_request:
  push:
```

주석에도 *"Runs on a warm self-hosted runner on **alpha**"* 라고 적혀 있습니다.
`alpha` 는 올린다 운영 컨테이너가 전부 떠 있는 바로 그 호스트입니다.

self-hosted 러너를 **public** 저장소에 붙이면, 외부인이 PR 하나만 열어도 그 호스트에서 코드가 돌 수 있습니다.
GitHub 이 공식적으로 권장하지 않는 구성이고, 지금의 차단은 사실상 그 사고를 막아주고 있는 셈입니다.

## 권장 해소 절차 — 이 저장소를 private 으로

`private` 이어야 합니다. **`internal` 은 안 됩니다** (`private < internal` 이라 여전히 규칙 위반).

### 사전 확인 — 이 저장소는 fork 입니다

`ehddusheo/globe-dashboard` 의 fork 이고, **GitHub 은 fork 의 가시성 변경을 허용하지 않습니다.**
먼저 fork network 에서 분리해야 합니다. 자가 서비스 조건은 3개이고 현재 **모두 충족**합니다.

| 조건 | 현재 |
|---|---|
| fork 가 public | ✅ |
| 1GB 미만 | ✅ (약 1.6 MB) |
| 하위 fork 없음 | ✅ (0개) |

### 순서 (순서가 중요합니다)

1. **Gemini API 키부터 폐기·재발급.**
   `main` 의 `app.js` 에 있는 키는 지금 이 순간 인증 없이 읽힙니다:
   `curl https://raw.githubusercontent.com/FINGU-GRINDA/rinda-globe-dashboard/main/app.js`
   private 전환은 앞으로의 노출만 막을 뿐, 이미 유출된 키는 되돌리지 못합니다.

2. **Settings → Danger Zone → Leave fork network**
   > ⚠️ **PR·이슈·스타·워처가 전부 삭제됩니다.** 되돌릴 수 없습니다.
   > **브랜치와 커밋은 그대로 남습니다** — git 데이터는 보존되고 GitHub 메타데이터만 사라집니다.

3. **Settings → Danger Zone → Change visibility → Make private**

4. **살아남은 브랜치로 PR 을 다시 엽니다.**
   이제 Supply-Chain Scan 이 정상적으로 스케줄되고, 통과하면 머지됩니다.

5. **올린다 웹훅을 다시 확인합니다.**
   fork network 분리 시 저장소 내부 ID 가 바뀌므로 push 웹훅이 끊길 수 있습니다.
   자동 배포가 안 돌면 앱을 다시 등록하거나 웹훅을 재생성하세요.
   머지 후 배포 브랜치도 `main` 으로 돌려놓습니다:
   ```bash
   allrinda apps update rinda-globe-dashboard --branch main
   ```

### PR 기록을 꼭 보존해야 한다면

조직 소유자가 룰셋을 잠시 `evaluate`(dry-run)로 내리거나 이 저장소를 exclude 조건에 넣어
**먼저 머지**한 뒤, 2~3단계를 진행하면 됩니다. 단계는 늘지만 머지가 저장소 수술보다 앞서므로 더 안전합니다.

## 대안 — public 을 유지해야 한다면

조직 룰셋에서 이 저장소를 제외하고, 대신 **GitHub-hosted 러너**로 도는 인-레포 스캔을 넣습니다.
self-hosted 노출 없이 PR 시점 검사를 유지할 수 있습니다.
이 저장소는 과거 두 차례 Shai-Hulud 페이로드가 커밋된 이력이 있어, 스캔을 그냥 없애는 선택은 권하지 않습니다.

## 참고

- [Setting repository visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)
- [Detaching a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/detaching-a-fork)
- [About permissions and visibility of forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks)
