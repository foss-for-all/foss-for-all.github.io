---
title: News
layout: "hextra-home"
---
{{< hextra/hero-headline >}}
News from FOSS for All
{{< /hextra/hero-headline >}}
Check out our latest news and scheduled events!

{{< discourse-feed-section
  title="Notices/Announcements"
  json="https://forum.fossforall.org/c/news/11.json"
  more="https://forum.fossforall.org/c/news/11"
  moreText="More"
  limit=6
>}}

{{< discourse-feed-section
  title="Newsletter"
  json="https://forum.fossforall.org/c/news/newsletter/12.json"
  more="https://forum.fossforall.org/c/news/newsletter/12"
  moreText="More"
>}}

{{< discourse-feed-section
  title="Blog"
  json="https://forum.fossforall.org/c/blog/8.json"
  more="https://forum.fossforall.org/c/blog/8"
  moreText="More"
>}}

{{< discourse-event-banners
  title="FOSS for All Events"
  json="https://forum.fossforall.org/c/calendar/fossforall-events/7.json"
  more="https://forum.fossforall.org/c/calendar/fossforall-events/7"
  moreText="더 보기"
  limit=3
>}}

{{< discourse-event-banners
  title="Community Events"
  json="https://forum.fossforall.org/c/calendar/community-events/6.json"
  more="https://forum.fossforall.org/c/calendar/community-events/6"
  moreText="더 보기"
  limit=3
>}}

{{< discourse-event-banners
  title="FOSS for All Schedules"
  json="https://forum.fossforall.org/c/calendar/fossforall-calendar/17.json"
  more="https://forum.fossforall.org/c/calendar/fossforall-calendar/17"
  moreText="더 보기"
  limit=3
>}}
