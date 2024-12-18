export const projects = [
    {
        id: "test",
        topic: ["research"],
        title: "A Test for Evaluating Performance in Human-Computer Systems",
        year: 202405,
        desc: "The Turing test for comparing computer performance to that of humans is well known, but, surprisingly, there is no widely used test for comparing how much better human-computer systems perform relative to humans alone, computers alone, or other baselines. In this paper, we show how to perform such a test using the ratio of means as a measure of effect size.",
        link: "https://arxiv.org/abs/2206.12390",
        image: "projects/test.png",
        keywords: ["human-AI interaction"],
    },
    {
        id: "who2chat",
        topic: ["research"],
        title: "Who2Chat",
        year: 202404,
        desc: "Who2chat: A Social Networking System for Academic Researchers in Virtual Social Hours Enabling Coordinating, Overcoming Barriers and Social Signaling",
        link: "https://doi.org/10.1145/3637435",
        image: "projects/who2chat.png",
        keywords: ["virtual", "conference"],
    },
    {
        id: "togedule",
        topic: ["research"],
        title: "Adaptive representation of group availability for scheduling meetings",
        year: 202203,
        desc: "How can we adjust the interface to reduce the cognitive load of selecting/digesting available times?",
        slides: "https://www.slideshare.net/secret/iIsfFq9obr82EB",
        image: "projects/togedule.gif",
        keywords: ["collaboration", "design", "sensemaking"],
        current: true,
        paragraph: ``,
    },
    {
        id: "notescribe",
        topic: ["research"],
        title: "Supporting note-taking process in online meetings",
        year: 202208,
        desc: "In meetings, it is difficult to pay attention and take notes at the same time. How can we support the note-taking process to reduce such a burden?",
        link: "https://weblab.mit.edu/winners/",
        image: "projects/notescribe.jpg",
        keywords: ["NLP", "human-AI interaction", "collaboration"],
        prize: {
            name: "3rd Place Winner of MIT Web Lab 2022",
            date: "Jan 2022",
            affiliation: "MIT Web Lab Competition",
            link: "https://weblab.mit.edu/winners/",
        },
        current: true,
        paragraph: `We propose an autocomplete recommendation module that suggests a list of possible words that the user can choose the next word from. The recommendation is based on the data collected from live transcription of the meeting and other metadata that was input by the user such as names of the attendees. We examine multiple ways to show these suggestions in order to find out which kinds of interactions can successfully help reduce the cognitive load of taking notes during a meeting. The image above shows one of the interfaces that we are testing out. The recommendation engine is powered by GPT-3.  `,
    },
    {
        id: "writing",
        topic: ["research"],
        title: "GPT-3 and Humans writing romance stories together",
        year: 202203,
        desc: "How fast can human-computer groups write romance stories together, in comparison to computers alone or humans alone? How better or worse are these stories?",
        link: "https://arxiv.org/abs/2206.12390",
        slides: "https://docs.google.com/presentation/d/1pRe_bncpm8IGL3_T5Jc4GE2LXqVE6EinEXl9xiSnfIw/edit#slide=id.g12fca8455f6_0_0",
        image: "projects/story.gif",
        keywords: ["NLP", "human-AI interaction"],
        current: true,
        paragraph: `This project is part of an umbrella project that aims to find out how to create <i>dramatically</i> more intelligent (i.e., superintelligent) human-computer groups. We expect that creating a short love story will be the type of task where such human-computer groups can excel. Thus, we aim to test whether stories generated by combination of human and GPT-3 can be dramatically better than human or GPT-3 alone in terms of both speed and quality. This project is also a follow-up of <a href='https://arxiv.org/abs/2206.12390' target='_blank'>this sister project</a> that has been recently submitted to PNAS Journal.<br/><br/> <table class='mb-2'><tbody><tr><td><b>Example of GPT-3-generated story</b><br/><br/>Max and Lily were at a party. They were both bored. They sat on a sofa together.<br/><br/>"I'm sorry I'm boring you," Max said.<br/>"Don't be so silly," Lily said, "We're both as bad as each other."<br/>"Let's go for a walk," said Max."Yes, let's," Lily answered.<br/><br/>So they went out for a walk in the dark street. It was spring and warm enough to walk without an overcoat. They walked very slowly, and they talked about themselves and their friends and what fun it was to be young and in love with somebody. Suddenly Max stopped walking and seized her by the arm. "I think I'm in love with you," he said, in amazement at himself or at her, or both of them together in the night under the trees that smelled like lilac and fresh bread. Later they were to realize that this was the beginning of their love story that</td><td><b>Example of GPT-3-generated story edited by a human</b><br/><br/>Max and Lily were at a party. They were both bored. They sat on a sofa together.<br/><br/>"I'm sorry I'm boring you," Max said.<br/>"Don't be so silly," Lily said, <span class='blue'>"You’re not boring me at all!"</span><br/>"Let's go for a walk," said Max."Yes, let's," Lily answered.<br/><br/>So they went out for a walk in the dark street. It was spring and warm enough to walk without an overcoat. They walked very slowly, and they talked about themselves and their friends and what fun it was to be young and in love with somebody. Suddenly Max stopped walking and seized her by the arm. "I think I'm in love with you," he said, in amazement at himself or at her, or both of them together in the night under the trees that smelled like lilac and fresh bread. Later they were to realize that this was the beginning of their love story.</td></tr></tbody></table>
      Like the example above, even a very minor human assistance can lead to a large improvement of the resulting quality. To improve the default quality of the GPT-3-generated stories, we have collected 285 different example stories and have explored prompt engineering with various parameters (e.g., temperature). There are three types of human interventions we examine. The first intervention is <b>revision</b>, where humans select and then revise the stories generated by GPT-3. The second intervention is <b>selection</b>, in which humans filter out the GPT-3-generated stories. The third intervention is <b>iterative writing</b>, where GPT-3 keeps completing the text prompted by humans and humans select one of the completions and freely edit them.<br/><br/>Our hypothesis is that human-computer combination would produce stories of similar quality with much less cost compared to humans alone, and would produce stories of acceptable quality, whereas computers alone cannot.`,
    },
    {
        id: "minglr",
        topic: ["research"],
        title: "Minglr",
        year: 202105,
        featured: true,
        desc: "Supporting Ad Hoc, Private Conversations at Virtual Conferences",
        link: "https://cci.mit.edu/minglr/",
        code: "https://github.com/CCI-MIT/minglr",
        video: "https://youtu.be/Xruflul84ik",
        image: "projects/minglr.jpg",
        keywords: ["virtual", "conference"],
    },
    {
        id: "zatoori",
        title: "Zatoori",
        topic: ["schoolwork", "personal"],
        year: 202008,
        desc: "A mobile application that helps people exercise in free time",
        image: "projects/zatoori.jpg",
        link: "https://www.behance.net/gallery/111082311/Zatoori-A-mobile-application-design",
        keywords: ["design", "mobile"],
    },
    {
        id: "suggestbot",
        title: "SuggestBot",
        topic: ["research"],
        year: 201812,
        desc: "Crowdsourcing Evidence for Debate using Amazon Mechanical Turk. Project at Kixlab (Dec 2018 - Feb 2019)",
        code: "https://github.com/kixlab/suggestbot-rails",
        image: "projects/suggestbot.jpeg",
        keywords: ["crowdsourcing", "online discussion"],
    },
    {
        id: "truth",
        title: "Truth101",
        topic: ["schoolwork"],
        year: 201912,
        desc: "Investigating the truth of Produce 101 results through data on Naver TV and DC Inside.",
        link: "https://truth-101.github.io/",
        code: "https://github.com/jyoonsong/truth101",
        image: "projects/truth101.jpeg",
        keywords: ["datamining", "social issue"],
    },
    {
        id: "gaemi",
        title: "Organic Crowdsourcing",
        topic: ["research"],
        year: 201908,
        desc: "Credibility Assessment and Critical Thinking through Microtasks while Reading - How to intrinsically motivate readers by personalizing the sequence of microtasks",
        slides: "https://docs.google.com/presentation/d/1-ThkCnb99jRDb5GaQee6vBDoydss0-77gfS8gAYoJko/edit?usp=sharing",
        code: "https://github.com/jyoonsong/organic",
        image: "projects/gaemi.jpeg",
        keywords: ["crowdsourcing", "motivation"],
    },
    {
        id: "solutionChat",
        title: "SolutionChat",
        year: 201812,
        featured: true,
        topic: ["research"],
        keywords: ["online discussion", "social issue", "human-AI interaction"],
        paper: "https://kixlab.github.io/website-files/2020/chi2020-SolutionChat-paper.pdf",
        link: "https://doi.org/10.1145/3313831.3376609",
        video: "https://www.youtube.com/watch?v=MzUJzGOQXLI",
        image: "projects/solutionchat.jpeg",
        slides: "https://docs.google.com/presentation/d/1hf84DHNZ2i3gJ0G8hIX1Kij83QtC-UNFN2v01HyCp-k/edit?usp=sharing",
        desc: "Real-time Moderator Support for Chat-based Structured Discussion",
    },
    {
        id: "talkingBoogie",
        title: "TalkingBoogie",
        year: 201901,
        featured: false,
        topic: ["research"],
        keywords: ["collaboration", "accessibility"],
        prize: {
            name: "Honorable Mention (top 5%)",
            date: "May 2020",
            affiliation: "ACM CHI",
            link: "https://chi2020.acm.org/for-attendees/chi-2020-best-papers-honourable-mentions/",
        },
        paper: "https://donghoon.io/assets/pdf/chi2020_talkingboogie_paper.pdf",
        link: "https://dl.acm.org/citation.cfm?id=3312865/",
        image: "projects/talkingboogie.jpeg",
        desc: "Collaborative Mobile AAC System for Non-verbal Children with Developmental Disabilities and Their Caregivers",
        paragraph:
            "We worked like this - <a target='_blank' href='https://drive.google.com/open?id=1bNXBJ5wH5DEvbgjWWix2bAs8GOFqKJmx'>click here to see!</a>",
    },
    {
        id: "soundglance",
        title: "SoundGlance",
        year: 201902,
        featured: false,
        topic: ["research"],
        keywords: ["accessibility", "human-AI interaction"],
        paper: "https://hcil.snu.ac.kr/system/publications/pdfs/000/000/125/original/LBW1821.pdf",
        link: "https://dl.acm.org/doi/abs/10.1145/3290607.3312865",
        video: "https://www.youtube.com/watch?v=_Qml_WqmVFY",
        code: "https://github.com/SoundGlance/",
        image: "projects/soundglance.jpeg",
        desc: "Briefing the glanceable cues of Web pages for screen reader users",
        paragraph:
            "<strong>Motivation.</strong> I learned HTML for the first time when I was in high school, and since then I've been participating in a lot of web projects mostly working as a front-end developer. As I got better in web development, <b>web accessibility</b> was one thing I started to care about. Although there was an official accessibility guideline for web developers to comply with, most websites did not follow this guideline in reality. I thought there should be some other way to tackle the problem of web accessibility than just to rely on each developer, which is the initial motivation for SoundGlance project.<br><br> So I and Kiroong started this project with the help of X-corps research institute and Siloam Center for the Blind People. Then, we continued this project while I was working at <a target='_blank' href='https://hcil.snu.ac.kr'>SNU HCI Lab</a>.<br><br> <strong>Abstract.</strong> Screen readers have become a core assistive technology for blind web users to browse web pages. Although screen readers can convey the textual information or structural properties of web pages, they cannot deliver their overall impression. Such a limitation hinders blind web users from obtaining an overview of the website, which non-blind people can do in a short time. As such, we present SoundGlance, a novel application that briefly delivers an auditory summary of web pages. SoundGlance supports the screen reader users by converting the important glanceable cues of the pages into sound. The feasibility of the prototype was examined in a pilot study with fourteen blind people. Several practical insights were derived from the experiment.",
    },
    {
        id: "oss",
        title: "OSS Efficiency",
        year: 201603,
        topic: ["research", "schoolwork", "competition"],
        keywords: ["datamining", "collaboration"],
        paper: "https://www.mdpi.com/2071-1050/10/9/3001",
        code: "https://github.com/jyoonsong/oss-efficiency",
        image: "projects/oss.jpeg",
        slides: "https://www.slideshare.net/JyoonSong/what-is-needed-for-the-sustainable-success-of-open-source-software-projects-efficiency-analysis-of-commit-production-process-via-git-171519211",
        desc: "What Is Needed for the Sustainable Success of Open Source Software Projects?",
        prize: {
            name: "Grand Prize (1st)",
            date: "May 2018",
            affiliation:
                "Undergraduate Research Presentation Competition, Korean Production & Operations Management Society",
            link: "https://www.hangyo.com/news/article.html?no=85459",
        },
        paragraph:
            "I started this project when I was <b>freshman</b> at college. I took a course titled 'Operations Management' taught by Professor Changhee Kim, where I did this project as a class assignment. Then, I took another class called 'Management Science' also taught by Prof. Kim. There, I worked more on the project and almost completed it. So this project was in fact already finished when I was a sophomore. <br><br>Next year, when I became a junior, I won first prize at a competition held by Korean Production and Operations Management Society (KOPOMS) where I gave a talk about this project. Soon Prof. Kim recommended to me submitting the completed work to a journal called Sustainability. That's how this work got published. However, since I had no time at the moment, I just <b>hired an expert to translate my manuscript</b>. Now that I look more into it, translation is kind of bad. Please keep in mind that the I only wrote the Korean version.<br><br>The paper is about 'what is needed for open source software projects to be efficient?'. Existing literature and common wisdom including Linus' Law celebrate the 'many eyeballs' as the key advantage of open source projects. Nevertheless, when it comes to efficiency, <b>'many eyeballs' could be a double-bladed sword.</b> By mining and analyzing the data collected from GitHub open source projects, this paper provides several implications for the efficiency of open source projects.",
    },
    {
        id: "shashagungun",
        title: "Shashagungun (샤샤건건)",
        year: 201702,
        featured: true,
        topic: ["personal", "competition"],
        keywords: ["web dev", "idea"],
        image: "projects/shashagungun.jpeg",
        link: "https://shashagungun.com",
        desc: "Web Platform to gather posters of various events in Seoul National University",
        prize: {
            name: "Winner (1st)",
            date: "Feb 2017",
            affiliation: "SNULife School Service Development Tournament",
            link: "https://snulife.com/sandbox/106346747",
        },
        paragraph:
            "<strong>Introduction.</strong> Shashagungun is a platform for Seoul National University (SNU) students to share posters about school events such as market, daily pub, competitions, seminars, exhibitions, and so on. It was implemented by me and other 5 people, who were all members of a web programming club called <a target='_blank' href='https://snu.likelion.net'>Likelion</a>. We won <b>first place at a competition for developing a school-related service</b> held by <a target='_blank' href='https://snulife.com'>SNULife</a>, which is a web-based community for SNU students. Shashagungun is a coined term derived from Korean idiom 'Sasagungun (사사건건)' combined with 'Sha (샤)' that is symbolic of SNU.<br><br><strong>Motivation.</strong> My idea about Shashagungun started a long time ago. I used to design numerous posters, but as time passed, I felt bad about my posters stuck useless in my laptop -- not only mine, but many other high-quality posters lasting only for a short period and then thrown out to bin. <br><br> Furthermore, this was tragedy for not only the designers, but also students in general. Information on school events, particularly the unofficial ones held by students, was so unorganized that students often were confused or never found out the events. Something had to be done to get the posters organized in a single space. <br><br> So these are why I came up with the idea of bringing the posters online to create an online platform where (1) students can easily search and obtain information on school events, and (2) at the same time designers can preserve their precious efforts on the posters.",
    },
    {
        id: "music",
        title: "Music of Bullshit (아무말음악잔치)",
        year: 201707,
        topic: ["personal", "competition"],
        keywords: ["collaboration", "idea"],
        image: "projects/music.jpeg",
        slides: "https://www.slideshare.net/JyoonSong/music-of-bullshit-likelion-ideathon-2017-184059240",
        desc: "Any sound can become a piece of music! A platform where users can collaboratively compose with any kind of nonsense sound",
        prize: {
            name: "Top Ten Winner ($1,000 AWS Credits)",
            date: "Jul 2017",
            affiliation: "Likelion (supported by AWS Korea)",
            link: "https://www.hangyo.com/news/article.html?no=85459",
        },
    },
    {
        id: "samsung",
        title: "Matcha - Watcha for Restaurants",
        year: 201809,
        topic: ["competition"],
        keywords: ["web dev"],
        image: "projects/samsung.jpeg",
        slides: "https://www.slideshare.net/JyoonSong/music-of-bullshit-likelion-ideathon-2017-184059240",
        desc: "Restaurant recommendation service for Samsung AI Hackathon",
        prize: {
            name: "Top Ten Finalist",
            date: "Sep 2018",
            affiliation: "Samsung Research",
            link: "https://research.samsung.com/aichallenge/hackathon",
        },
    },
    {
        id: "chartmetric",
        title: "Intern at Chartmetric",
        year: 201708,
        topic: ["startup"],
        keywords: ["web dev", "visualization"],
        image: "projects/chartmetric.jpeg",
        link: "https://chartmetric.io",
        desc: "Short-term intern for front-end development",
        paragraph:
            "Chartmetric is a self-service tool that features a beautifully designed dashboard that combines hundreds of thousands of real-time data points across multiple music platforms (e.g., Spotify, iTunes). <br><br> In 2017 fall semester, I went to University of Southern California (USC) as an exchange student. Visiting Sungmoon Cho, who is the CEO of Chartmetric, I eventually became a short-term intern working on the front-end part of the system and visualizing the data.",
    },
    {
        id: "refugees",
        title: "Are Refugees Dangerous?",
        year: 201811,
        featured: true,
        topic: ["schoolwork"],
        keywords: ["social issue", "visualization"],
        link: "https://jaeyoon.io/dt4c",
        image: "projects/img-2-small.jpeg",
        desc: "What people think, what data say, and what media highlight",
        paragraph:
            "The topic of my project was refugees, more specifically the Yemeni Muslim refugees coming to Jeju island in South Korea. To narrow down the scope of the topic, I tried to put emphasis on the question if the refugees are dangerous and likely to be involved in a crime in particular. I didn’t explicitly answer the question, but instead tried to focus more on delivering the data itself so that the reader wouldn’t feel that they are being forced to be on one side. One example is the case of Sweden in which I showed both increasing and decreasing crime rate due to accepting refugees. This implies that the number of refugees have nothing to do with the crime rate, showing neither positive nor negative correlation. <br><br> I spent a lot of time searching for factual data—I even read the German official police report using Google translation in order to keep the objectivity using the rawest data. Because of this, the resulting infographic was less visually engaging, and sometimes even misleading due to wrong usage of visual devices.<br><br>The infographic first points out what the people think about the refugees, which has also been a motivation for this project. Then, it points out how crime rate of refugees or foreigners are not so different from other people, giving example of Germany, Norway, and South Korea. Lastly, it suggests that maybe the reason for the difference between people's perspective and what data really says is partially because of what media highlight.",
    },
    {
        id: "muggles",
        title: "Magic Spells All Muggles are Jealous of",
        year: 201810,
        featured: true,
        topic: ["schoolwork"],
        keywords: ["illustration", "visualization"],
        link: "https://jaeyoon.io/dt4c",
        image: "projects/img-1-small.jpeg",
        desc: "Twelve variations of magic spells that appear in Harry Potter series.",
        paragraph:
            "When I was young, I used to draw up a list of magic spells whenever I was reading Harry Potter. Some of them were so frequently cited that I remember them even now. Among many spells, as the title implies, I tried to avoid selecting deadly spells such as the three unforgivable curses—Avada Kedavra, for example, kills the target. Instead, selected spells are the ones that are comparatively peaceful and trivial but useful. This also accords with the theme of this assignment—my favorite things—since deadly curses are definitely not my favorite, though the magic itself and Harry Potter series are.<br><br>For more information, please visit <a href='https://jaeyoon.io/dt4c' target='_blank'>website.</a>",
    },
    {
        id: "degrees",
        title: "Six Degrees of Jaeyoon Song",
        year: 201812,
        topic: ["schoolwork"],
        keywords: ["datamining", "visualization"],
        link: "https://jaeyoon.io/dt4c",
        image: "projects/img-3-small.jpeg",
        desc: "Checking 'six degrees of Kevin Bacon' for my relationships on Facebook",
        paragraph:
            "<strong>About.</strong> I collected data of my friends at Facebook, friend lists of those friends, friend lists of those friends of friends, and so on—only up to 6 times. With this data, I found the shortest path within six degrees that starts from my direct friends and comes back to me on Facebook. Also, I collected data of recent closeness by combining the number of mentions each friend is mentioned in my recent SNS notifications with my subjective closeness. My intention was to briefly check the following two things - (1) Does the concept of “six degrees of Kevin Bacon” also apply to my relationships on Facebook? (2) Does the shortest path have any relationship with recent closeness? The answer for the first question was \"most of the time,\" since there were several exceptions. For the second question, the answer was definitely \"yes\", since there was a high correlation between recent closeness and the degree in the shortest path. I thought that my relationships are relatively distributed, because with the other person’s data, I believe the results might have been much simpler ending up with only two or three degrees.<br><br><strong>How to Read.</strong> Each line coming straight out from the center of the circle represents my direct friend who is one degree away from me. The innermost part of the circle is recent closeness visualized as a line graph. Then, the innermost node refers to the friend of my friend, not my direct friend. So if the number of degrees is 2, the path is ‘my friend - friend’s friend - me’. If the path was found within six degrees, the vertices and edges were colored gray, whereas if not, the vertices and edges were colored blue—the vertices of me myself were colored yellow. The dark blue zone corresponds to an infinite zone implying that the connection didn’t come back to me yet.<br><br><img src='https://66.media.tumblr.com/7c68dfaf932ee05a0e085541a602eec4/tumblr_inline_pjzlchpmns1w8f964_540.gif' width='400'><br><br><strong>Implementation.</strong> For implementation, I used d3.js, which was also introduced in class by Professor Hong. Since d3.js is easily used together with web standards, I made an interactive version—nothing special except for tooltips, export function, and the buttons to check the small multiples—on the web as the photo above.",
    },
    {
        id: "bigpearl",
        title: "Founding member of Bigpearl",
        year: 201806,
        topic: ["startup"],
        keywords: ["web dev", "marketing"],
        image: "projects/bigpearl.jpeg",
        link: "https://ad.bigpearl.io",
        desc: "I used to be a member of Bigpearl, a startup for influencer ad campaigns",
    },
    {
        id: "cube",
        title: "The Cube",
        year: 201712,
        featured: true,
        topic: ["personal", "schoolwork"],
        keywords: ["web dev"],
        link: "https://jaeyoon.io/cube",
        image: "projects/cube.gif",
        desc: "My previous portfolio website",
        paragraph:
            "I love cubes (i.e., regular hexahedrons). Why? There is no special reason. You know, they're just interesting, stable, and beautiful.<br><br> I do know that placing navigation links on a cube that is incessantly rotating does not really provide an optimal user experience, which is why I created this new ''ordinary'' version of portfolio website. The cube version was more targeted for <i>expressing</i> myself as an enthusiast in web development and design. I wanted to place something non-typical and cool in the middle of my website.<br><br>I started this project as an assignment at 'Interactive Web Development' class taught by <a href='https://viterbi.usc.edu/directory/faculty/Kim/Nayeon' target='_blank'>Prof. Nayeon Kim</a> at the University of Southern California. I was an exchange student there, and I got the top score for the final project (300/300) with this website. I also got A as my final grade, the highest grade in the grading system at USC.",
    },
    {
        id: "history",
        title: "Visualizing Korean Independence Movement",
        year: 201805,
        topic: ["schoolwork"],
        keywords: ["web dev", "visualization"],
        image: "projects/history.jpeg",
        link: "https://jaeyoon.io/infovis",
        code: "https://github.com/jyoonsong/hci-project",
        desc: "HCI team project",
    },
    {
        id: "ravi",
        title: "RAVi - Realtime Collaborative Video Chat Summarization",
        year: 201809,
        topic: ["schoolwork"],
        keywords: ["web dev", "sensemaking", "collaboration"],
        image: "projects/ravi.jpeg",
        link: "https://github.com/jyoonsong/RAVi",
        code: "https://github.com/jyoonsong/RAVi",
        desc: "How to support writing a meeting log while doing a video chat?",
    },
];

/*
who2chat
story
agreement
noteworthy 
scheduling
 */
