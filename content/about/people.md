---
title: 함께하는 사람들
type: docs
aliases:
  - /about/board-of-directors/
---

FOSS for All과 함께하는 운영위원과 회원을 소개합니다. 역대 운영위원회 구성원은 [공시/규정 - 운영위원회](../../disclosures/board-of-directors/)에서 확인하실 수 있습니다.

{{< cards >}}
  {{< member-card github="sukso96100" link="https://github.com/sukso96100" title="한영빈 (대표)" subtitle="오랜 시간 주로 우분투 커뮤니티에서 활동하며 지역화(번역)나 버그 리포트, 지역 커뮤니티 운영이나 각종 컨퍼런스 운영 등에서 기여를 많이 해 오고 있습니다. 우분투한국커뮤니티(혹은 Korean LoCo) 및 지역/국가별 우분투 커뮤니티를 관리하는 조직인 Ubuntu Local Community Council, UbuCon Asia 준비위원회 등에서 활동하고 있습니다." >}}
  {{< member-card github="ppiyakk2" link="https://github.com/ppiyakk2" title="조성수 (운영위원)" subtitle="클라우드 서비스 제공회사의 클라우드 인프라 엔지니어로 근무하는 조성수입니다. 2014년 파이콘 한국 자원봉사 활동을 시작으로 오픈소스 커뮤니티에 참여하게 되었습니다. 지금은 파이썬 사용자 모임과 오픈인프라 한국 사용자 모임의 운영진으로 활동하며, 국내 파이썬과 오픈스택 생태계 활성화에 기여하고 있습니다. IT개발자들의 기술 교류 및 트워킹 행사를 기획하고 운영하는데 많은 경험이 있으며 좋은 사람들과 함께 행사를 만들어나가는 것이 인생의 취미입니다." >}}
  {{< member-card github="OctopusET" image="images/board/Sungjoon_Moon.jpg" link="https://github.com/OctopusET" title="문성준 (운영위원)" subtitle="2017년 처음  ubuntu로 리눅스를 접한 이후 부터 자유 오픈소스 소프트웨어에 푹 빠져 지속적으로 자유 오픈소스 소프트웨어 위주로 소프트웨어를 사용해 왔습니다. 현재는 주로 아치리눅스를 사용하며 몇몇 패키지를 AUR에서 관리하고 있습니다. 자유 오픈소스 소프트웨어를 번역하는 것으로 기여를 시작했으며, 현재는 sway-contrib의 메인테이너로 활동하며 sway wayland compositor의 유저 스크립트를 관리하고 있습니다. RISC-V에도 관심이 많아 dav1d나 여러 프로젝트를 참여하려고 노력하고 있습니다. 자유 오픈소스 소프트웨어만 개발하며 먹고 살수 있는 삶을 목표로 하고 있습니다. 영화와 음악을 사랑합니다." method="Resize" options="600x q80 webp" >}}
  {{< member-card github="yha992" link="https://github.com/yha992" title="유현아 (운영위원)" subtitle="안녕하세요. 한빛미디어 계열에서 개발자 행사 기획·운영을 하고 있습니다. 활동하는 커뮤니티는 여성 개발자의 성장을 위한 위민후코드 서울에서 운영진활동을 하고 있으며, 그리고 JAX KR, 랭체인 코리아의 운영진 및 AI 커뮤니티에서도 활동하고 있습니다. 지금 기술로는 진행하는 프로젝트가 없어서 개발 관련해서는 이해에 대한 노력이 필요합니다. 그래도 여러 장점이 많으니 많은 사람이 오픈소스 활동에 참여하고 나눌 수 있도록 지원하고 싶습니다" method="Resize" options="600x q80 webp" >}}
  {{< member-card image="images/members/kim-seokhyeon.webp" link="https://www.linkedin.com/in/seokhyeon-kim-6674501b2/" title="김석현 (정회원)" subtitle="모빌리티 기업에서 백엔드 개발자로 근무하고 있는 김석현입니다. 한국 스프링 사용자 모임(KSUG)의 오거나이저로 활동하며 오픈소스 커뮤니티에 발을 들이게 되었습니다. 분산 시스템과 소프트웨어 아키텍처에 관심이 많으며, 업무 밖에서는 개발자들이 서로 교류하고 기술적·관계적 안정감을 얻을 수 있는 커뮤니티와 생태계를 만들어가는 데 관심을 두고 있습니다. 그 외에도 백엔드 개발 관련 저서를 출간한 경험이 있으며, dart_sentencepiece_tokenizer와 같은 작은 Dart 라이브러리를 직접 만들고 배포하거나 공익·공공 분야의 봉사활동에 참여하는 등 관심에서 출발한 여러 활동을 이어가고 있습니다." method="Fill" options="512x512 q85 webp" >}}
  <div class="ffa-member ffa-member--cta">
    <div class="ffa-cta-title">여러분도 함께해요!</div>
    <p class="ffa-cta-text">이 외에도 여러 회원이 FOSS for All과 함께하고 있습니다. 취지에 공감하신다면 회원으로 함께해 주세요.</p>
    <a class="ffa-cta-btn" href="/about/join/">회원 가입 신청하기</a>
  </div>
{{< /cards >}}

<script>
  (function () {
    var first = document.querySelector(".ffa-member");
    if (!first) return;
    var grid = first.parentElement;
    var all = Array.prototype.slice.call(grid.children).filter(function (el) {
      return el.classList && el.classList.contains("ffa-member");
    });
    var cta = all.filter(function (el) { return el.classList.contains("ffa-member--cta"); });
    var members = all.filter(function (el) { return !el.classList.contains("ffa-member--cta"); });
    for (var i = members.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = members[i];
      members[i] = members[j];
      members[j] = t;
    }
    var ordered = members.concat(cta);
    ordered.forEach(function (el) { grid.appendChild(el); });
    var equalize = function () {
      ordered.forEach(function (el) { el.style.height = ""; });
      var max = 0;
      ordered.forEach(function (el) { if (el.offsetHeight > max) { max = el.offsetHeight; } });
      ordered.forEach(function (el) { el.style.height = max + "px"; });
    };
    equalize();
    window.addEventListener("load", equalize);
    var timer;
    window.addEventListener("resize", function () {
      clearTimeout(timer);
      timer = setTimeout(equalize, 150);
    });
  })();
</script>
