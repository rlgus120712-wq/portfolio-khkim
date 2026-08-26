export interface Project {
  title: string;
  description: string;
  tech: string[];
  role: string;
  highlights: string[];
  period: string;
  company?: string;
  link?: string;
}

export const projects: Project[] = [
  // ========== Okestro 프로젝트 ==========
  {
    title: "Okestro Cloud Management Platform",
    description: "AWS, NCP, OpenStack, vSphere, NSX 등 멀티 클라우드 통합 관리 플랫폼",
    tech: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "TanStack Query",
      "NX Monorepo",
      "Terraform",
      "Kubernetes",
      "Docker"
    ],
    role: "Frontend Developer",
    company: "Okestro",
    highlights: [
      "멀티 클라우드 리소스 통합 관리 시스템 구축",
      "Kubernetes 클러스터 관리 및 컨테이너 오케스트레이션 UI 개발",
      "서비스 카탈로그: Terraform IaC 기반 리소스 자동 프로비저닝",
      "YAML 템플릿 활용한 Kubernetes 워크로드 배포 자동화",
      "NX Monorepo 기반 Feature-Sliced Design 아키텍처 설계",
      "300+ 재사용 가능한 Vue 컴포넌트 라이브러리 구축",
      "📊 성과: 리소스 신청 시간 80% 단축 (48시간 → 8시간)"
    ],
    period: "2023.01 - Present",
  },
  {
    title: "Okestro CMP - Keycloak 인증 시스템",
    description: "엔터프라이즈급 SSO 및 RBAC 권한 관리 시스템 구축",
    tech: [
      "Vue 3",
      "TypeScript",
      "Keycloak",
      "JWT",
      "OAuth 2.0",
      "OpenID Connect",
      "Pinia"
    ],
    role: "Frontend Developer",
    company: "Okestro",
    highlights: [
      "Keycloak 기반 SSO (Single Sign-On) 인증 시스템 구축",
      "JWT Token 기반 인증 및 자동 갱신 메커니즘 구현",
      "RBAC (Role-Based Access Control) 권한 관리 시스템 개발",
      "Workspace별 세밀한 권한 제어 및 사용자 관리",
      "OAuth 2.0 / OpenID Connect 프로토콜 연동",
      "Multi-Tenant 환경 지원 및 조직별 권한 분리",
      "📊 성과: 보안성 강화 및 사용자 관리 효율 70% 향상"
    ],
    period: "2024 - Present",
  },
  {
    title: "Okestro CMP - Governance Platform (거버넌스)",
    description:
      "멀티 테넌트 클라우드 거버넌스 플랫폼 - 조직/역할/권한부터 서비스 카탈로그·템플릿, 승인 워크플로우, 알림, 감사·접근 로그까지 전 영역 프론트엔드를 2년간 설계·구축·고도화",
    tech: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "TanStack Query",
      "Feature-Sliced Design",
      "NX Monorepo",
      "Ant Design Vue",
      "Keycloak",
      "RBAC"
    ],
    role: "Frontend Developer (Governance 도메인 담당)",
    company: "Okestro",
    highlights: [
      "조직(Organization) 관리: 다계층 조직도, 멤버·워크스페이스 매핑, 멀티 테넌트 격리",
      "역할·권한(Role & Access Control): RBAC 역할 정의, 접근 허용/라우트/사용자별 세밀한 권한 제어",
      "서비스 카탈로그·스토어: 클라우드 리소스 카탈로그와 신청(Service Request) 여정 설계",
      "서비스 템플릿: 폼/YAML 기반 서비스 템플릿 빌더 및 재사용 템플릿 관리",
      "승인 워크플로우(Approvals): 다단계 결재·위임(Delegate) 및 서비스 데스크 연동",
      "알림(Notification): 이벤트 기반 알림 센터 및 알림/토스트 정책 체계화",
      "감사·접근 로그(Audit/Access Log): 사용자 행위 추적, 접속 이력, 감사 로그 뷰어 구축",
      "메뉴·페이지 관리, 메트릭·쿼터 관리, 세션 관리 등 플랫폼 운영 기능 개발",
      "📊 성과: 2년간 거버넌스 도메인 20+ 모듈 지속 설계·고도화 및 운영"
    ],
    period: "2023 - Present",
  },
  {
    title: "Design System & Component Library",
    description: "재사용 가능한 Vue 3 컴포넌트 라이브러리",
    tech: ["Vue 3", "TypeScript", "Vuetify", "Storybook", "SCSS", "Design Tokens"],
    role: "Frontend Developer",
    company: "Okestro",
    highlights: [
      "CmpXXX.vue 네이밍 컨벤션 기반 공통 컴포넌트 개발",
      "Storybook 인터랙티브 문서화 및 데모",
      "Design Tokens 시스템으로 일관된 디자인 언어",
      "300+ 재사용 가능 컴포넌트 라이브러리",
      "접근성(A11y) 및 반응형 디자인 지원"
    ],
    period: "2024 - Present",
  },
  {
    title: "MCP Integration Hub - 생성형 AI 개발 도구",
    description: "Cursor AI, Windsurf 등 생성형 AI 도구와 MCP 프로토콜을 활용한 개발 워크플로우 자동화",
    tech: [
      "TypeScript",
      "MCP Protocol",
      "Cursor AI",
      "Windsurf",
      "Docker",
      "GitHub API",
      "Notion API",
      "Figma API",
      "Jira API"
    ],
    role: "Integration Architect & Developer",
    highlights: [
      "Cursor AI + Windsurf 생성형 AI 기반 개발 워크플로우 구축",
      "MCP (Model Context Protocol) 통합 허브 아키텍처 설계",
      "Atlassian (Jira/Confluence) 자동 이슈 생성 및 문서 연동",
      "GitHub PR 생성, 코드 리뷰, 저장소 관리 자동화",
      "Notion 개발 문서 자동 동기화 및 실시간 검색",
      "Figma 디자인 시스템 자동 코드 변환 및 컴포넌트 생성",
      "Swagger/OpenAPI 명세 자동 분석 및 API 클라이언트 코드 생성",
      "📊 성과: 반복 작업 60% 감소, 개발 생산성 3배 향상"
    ],
    period: "2025",
    link: "https://github.com/rlgus120712-wq/killer_joki_-development_story",
  },
  {
    title: "프론트엔드 커밋 파이프라인 성능 최적화 (Husky → Lefthook 전환)",
    description: "Nx 모노레포의 Git 훅 도구를 Lefthook으로 전환하고 type-checked ESLint 병목을 실측 기반으로 개선한 개발 생산성(DX) 프로젝트",
    tech: [
      "Lefthook",
      "ESLint",
      "typescript-eslint",
      "pnpm",
      "NX Monorepo",
      "Vue 3",
      "TypeScript",
      "Bash"
    ],
    role: "Frontend Developer (DX / Tooling)",
    company: "Okestro",
    highlights: [
      "Husky + lint-staged 조합을 Lefthook 단일 바이너리(YAML 설정 1개)로 대체하여 의존성·설정 복잡도 축소",
      "직렬/병렬/batch 실행을 실측 비교하는 벤치마크 도구를 직접 제작하여 병목이 'type-checked ESLint의 TypeScript 프로그램 재빌드 고정비용'임을 규명",
      "병렬 실행의 OOM 위험을 사전 검증하는 메모리 프로파일링 스크립트 구현 (피크 RSS 샘플링 + 안전 조합 탐색)",
      "pnpm v10 빌드 스크립트 차단으로 인한 훅 설치 실패를 onlyBuiltDependencies 허용 설정으로 해결",
      "📊 성과: pre-commit 검증 시간 47초 → 20초로 2.3배 단축 (파일별 실행 → batch 전환)"
    ],
    period: "2026",
  },
  {
    title: "Okestro CMP - 서비스 카탈로그 리팩터링 (FSD)",
    description: "클라우드 관리 플랫폼 서비스 카탈로그 도메인(약 2만 라인)을 레이어별 병렬 코드 리뷰로 진단하고 죽은 코드·잠재 버그·타입 취약점을 체계적으로 개선",
    tech: [
      "Vue 3",
      "TypeScript",
      "TanStack Query",
      "Ant Design Vue",
      "Pinia",
      "Feature-Sliced Design"
    ],
    role: "Frontend Developer",
    company: "Okestro",
    highlights: [
      "데이터/훅/UI/구조 레이어별 병렬 코드 리뷰로 대규모 도메인을 체계적으로 진단",
      "하드코딩된 workspaceId 3개소를 Pinia Store 주입으로 대체하여 멀티 워크스페이스 북마크 버그 수정",
      "API 레이어 any 타입 제거 및 TanStack Query 캐시 무효화 정합성 검증으로 타입 안전성 강화",
      "퍼블리싱 정책 준수: 커스텀 CSS 헬퍼를 디자인 시스템 컴포넌트(a-flex) API로 통일",
      "📊 성과: 미사용(dead) 컴포넌트·디렉토리 8개 제거로 네이밍 충돌 및 유지보수 부담 감소"
    ],
    period: "2026",
  },

  // ========== 크로니즈시스템 프로젝트 ==========
  {
    title: "CJ 올리브네트웍스 - 컬티 MES",
    description: "발효 공정 특화 제조실행시스템",
    tech: ["Vue.js", "TypeScript", "Oracle", "Chart.js", "MES"],
    role: "Frontend Developer",
    company: "크로니즈시스템 (CJ 프로젝트)",
    highlights: [
      "발효 공정 특화 MES 시스템 설계 및 구현",
      "실시간 발효 상태 모니터링 대시보드",
      "품질 관리 및 배치(Batch) 추적 시스템",
      "📊 성과: 발효 공정 효율 25% 향상"
    ],
    period: "2021 - 2022",
  },
  {
    title: "CJ 올리브네트웍스 - 화요공장 MES",
    description: "증류 공정 MES 및 전자 일지 관리 시스템 (HACCP 인증)",
    tech: ["Vue.js", "TypeScript", "Oracle", "MS-SQL", "Chart.js"],
    role: "Frontend Developer",
    company: "크로니즈시스템 (CJ 프로젝트)",
    highlights: [
      "증류 공정 MES 시스템 구축",
      "전자 일지 시스템 - 작업 일보/월보 자동 생성",
      "CCP (중요관리점) 자동 기록 및 알람 시스템",
      "온도, 습도, pH 센서 데이터 실시간 수집",
      "📊 성과: 스마트 HACCP 인증 획득"
    ],
    period: "2021 - 2022",
  },
  {
    title: "CJ 올리브네트웍스 - CJ ONE 스마트팩토리",
    description: "통합 생산 관리 플랫폼 및 3D 모니터링 시스템",
    tech: ["Vue.js", "TypeScript", "Oracle", "3D.js", "Chart.js", "MES"],
    role: "Frontend Developer",
    company: "크로니즈시스템 (CJ 프로젝트)",
    highlights: [
      "통합 생산 관리 플랫폼 구축",
      "3D 모니터링을 통한 실제 생산라인 시각화",
      "실시간 생산량 및 OEE 분석 대시보드",
      "공정별 설비 상태 모니터링 및 예측 정비",
      "📊 성과: 생산 효율 40% 향상"
    ],
    period: "2021 - 2022",
  },
  {
    title: "농심엔지니어링 - 정식품 MES (1차 고도화)",
    description: "생산 계획 및 실적 관리 시스템 개선",
    tech: ["Vue.js", "JavaScript", "Oracle", "MySQL", "MES", "SCADA"],
    role: "Frontend Developer",
    company: "크로니즈시스템 (농심 프로젝트)",
    highlights: [
      "생산 계획 및 실적 관리 시스템 개선",
      "실시간 설비 모니터링 및 OEE 분석 대시보드",
      "생산 공정별 작업 지시 및 실적 수집 자동화",
      "원자재 입고부터 완제품 출하까지 전 공정 가시화",
      "📊 성과: 생산성 28% 향상"
    ],
    period: "2021",
  },
  {
    title: "농심엔지니어링 - 정식품 MES (2차 고도화)",
    description: "품질 관리 강화 및 완전 디지털화",
    tech: ["Vue.js", "TypeScript", "Oracle", "MySQL", "AI Integration"],
    role: "Frontend Developer",
    company: "크로니즈시스템 (농심 프로젝트)",
    highlights: [
      "품질 관리 시스템 강화 및 원자재 추적성 구축",
      "작업 지시서 완전 디지털화 - 종이 없는 스마트 공장",
      "AI 기반 설비 예측 정비 시스템 프론트엔드 연동",
      "수율 관리 및 불량률 분석 대시보드",
      "📊 성과: 품질 불량률 35% 감소"
    ],
    period: "2022",
  },
  {
    title: "농심엔지니어링 - 동원F&B 스마트팩토리",
    description: "디지털 트랜스포메이션 및 3D 모니터링",
    tech: ["Vue.js", "TypeScript", "MS-SQL", "IoT", "3D.js", "AI"],
    role: "Frontend Developer",
    company: "크로니즈시스템 (농심 프로젝트)",
    highlights: [
      "생산 공정 디지털 트랜스포메이션",
      "IoT 센서 데이터 실시간 수집 및 시각화",
      "3D 모니터링 기반 생산라인 가시화",
      "공정 이상 감지 AI 알고리즘 연동",
      "📊 성과: 생산성 32% 향상"
    ],
    period: "2021 - 2022",
  },
  {
    title: "농심엔지니어링 - 자연과사람들 스마트팩토리",
    description: "친환경 식품 생산 공정 MES",
    tech: ["Vue.js", "TypeScript", "Oracle", "MES"],
    role: "Frontend Developer",
    company: "크로니즈시스템 (농심 프로젝트)",
    highlights: [
      "친환경 식품 생산 공정 MES 시스템 구축",
      "유기농 원료 추적성 및 인증 관리 시스템",
      "생산성 분석 리포트 자동 생성",
      "📊 성과: 인증 관리 효율 50% 향상"
    ],
    period: "2022",
  },
  {
    title: "농심엔지니어링 - 녹산 건면 공장 스마트팩토리",
    description: "면류 제조 특화 MES 및 3D 공정 모니터링",
    tech: ["Vue.js", "TypeScript", "MySQL", "3D.js", "MES"],
    role: "Frontend Developer",
    company: "크로니즈시스템 (농심 프로젝트)",
    highlights: [
      "면류 제조 특화 MES 시스템 설계 및 구현",
      "건조 공정 온습도 제어 시스템 개발",
      "3D 공정 모니터링 및 생산량 실시간 추적",
      "📊 성과: 건조 공정 효율 22% 향상"
    ],
    period: "2020 - 2021",
  },
];