export const title = "Tracks & Challenges";

export const cards = [
    {
        icon: "https://microicon-clone.vercel.app/bubble_chart/ffffff",
        type: "track",
        title: "General Track",
        text: "Our theme this year is community! After spending so much time apart, we’re looking for hacks that will bring us together again (safely) and/or help out other members of the community. We’re looking for complete, functional projects as opposed to just UI mockups and idea explanations, but we obviously understand if a few things are hardcoded. While we would love to see a community themed hack, the General track also accepts submissions about anything, so feel free to submit whatever hack you come up with! Please note, if you submit to the CDK Global, Lilie, or Beginner Track, you may not submit to the General Track."
    },
    {
        icon: "https://microicon-clone.vercel.app/bubble_chart/ffffff",
        type: "track",
        title: "First Timers' Track",
        href: "https://github.com/hack-rice/HR9-First-Timers-Track",
        text: "This track is only for groups with a majority of people who have <1 year of programming experience. We’ve left it open ended, but here are some ideas to get you started! Our theme is community, but hacks about (almost) anything will be accepted!"
    },
    {
        icon: "https://microicon-clone.vercel.app/border_color/ffffff",
        type: "track",
        title: "EchoAR Track",
        href: "https://console.echoar.xyz/#/auth/register-hackathon?code=RiceSASEHack",
        text: "Build the best AR/VR application using the echoAR platform! Click here to register for this track - EchoAR has set up a special registration on their platform for those competing in this track!"
    },
    {
        icon: "https://microicon-clone.vercel.app/user/ffffff",
        type: "track",
        title: "CDK Global Track",
        href: "https://docs.google.com/document/d/1hV56u8As5yyCYVNgs_KBvKWQU1pzot5LXLydKfeEhRs/edit?usp=sharing",
        text: "See the link for more details!"
    },
    {
        icon: "https://microicon-clone.vercel.app/build/ffffff",
        type: "track",
        title: "Lilie Healthcare Track",
        href: "https://docs.google.com/document/d/1Ed7n2S5eAyneY31GltXW_-8aJy9q4C7oBBG3NpGBX3A/edit?usp=sharing",
        text: "See the link for more details!"
    },
    /*
        {
        icon: "https://microicon-clone.vercel.app/timeline/ffffff",
        type: "track",
        title: "Data Science and Machine Learning Track",
        href: "https://github.com/hack-rice/HR9-DS-ML-Track",
        text: "This track will allow you to explore interesting data sets using machine learning and other data science techniques. The goal is simple – find something interesting in your data and present it in a compelling manner. Projects with a social impact are especially encouraged."
    },
    {
        icon: "https://microicon-clone.vercel.app/bitcoin/ffffff",
        type: "challenge",
        title: "Bill.com",
        href: "https://docs.google.com/document/d/154aVkbCMp0_NQgSIhCm5t5iqqsXPrrmygN0p7_g7qX4/edit",
        text: (
            <>
                <p>
                    At Bill.com, we are constantly looking for new and exciting ways to make
                    it simple for business owners to connect and do business. To this year's
                    hackers we ask: "What are some outside of the box ways to leverage
                    technology to accomplish this?"
                </p>
                <p>
                    We want to challenge you to reimagine our user experience by embedding
                    Bill.com everywhere, and will be providing home devices, smartwatches and
                    tablets for anyone interested in developing on these systems.
                </p>
                <p>
                    The Bill.com team will work closely with hackers to leverage the Bill.com
                    API and client libraries, and host a Q&A workshop to help get teams up and
                    running with their projects. We look forward to meeting all of the this
                    year's participants and seeing what you all come up with!
                </p>
            </>
        )
    },
    {
        icon: "https://microicon-clone.vercel.app/local_gas_station/ffffff",
        type: "challenge",
        title: "Schlumberger",
        text:
            "From classical statistical methods to real-time constraint optimization, Bayesian neural networks, and reinforcement learning, Schlumberger uses Machine Learning to gain maximum insight from huge volumes of data.  Our challenge for you: use Machine Learning to solve a problem of your choice.  We will grade you on your idea, your implementation, and the amount of fun you had hacking! "
    },
    {
        icon: "https://microicon-clone.vercel.app/local_gas_station/ffffff",
        type: "challenge",
        title: "Chevron’s real-time work order scheduling optimization",
        text: (
            <>
                <p>
                    Background: Chevron has large scale operations and complex process facilities (refineries and
                    liquified natural gas production facilities). Scheduling work orders on these facilities with differing repair
                    requirements, specialized technicians, and potentially hours of drive time between locations can be
                    difficult.
                </p>

                <p>
                    Challenge: Build a work order tracking system that tracks (1) the work orders that are submitted and
                    (2) the technicians that are completing them to optimize how technicians are assigned and work orders
                    are completed. Knowing where technicians are, what they are certified/qualified to repair, how long they
                    are planning to being there, other work orders in the same or nearby location, etc will be invaluable in
                    being able to dynamically schedule and dispatch existing and new work orders to technicians at the
                    beginning of the day and while onsite. Updating each technician with their schedule of work orders can
                    be done through any means of mobile technology, SMS, call, mobile app, etc.
                </p>

                <p>
                    Data set <a href="https://drive.google.com/file/d/0B8KsuSvk0vSINUktRHNnbXhCdVoxS19qRWZxNnZzZFRsMWZN/view?usp=sharing">here</a>!
                </p>
            </>
        )

    },
    {
        icon: "https://microicon-clone.vercel.app/facebook/ffffff",
        type: "challenge",
        title: "Facebook",
        text: (
            <>
                <p>Best Algorithmically Complex App:</p>
                <p>We challenge you to put the skills Luay has taught you to good use.</p>
                <p>Oculus Gos will be awarded to the team that utilizes a non-trivial algorithm or AI as part of their application to create value for users.</p>
                <p>While external libraries and services may be used to aid your app, we will only evaluate the components of the app created by your team.</p>
            </>
        )
    },
    {
        icon: "https://microicon-clone.vercel.app/airplanemode_active/ffffff",
        type: "challenge",
        title: "ForeFlight: Airport Recommendation Challenge",
        href: "http://bit.ly/HackRiceForeFlight2019",
        text: (
            <>
                <p>
                    A pilot decides she wants to go flying this weekend because the weather is
                    really nice, but she can’t decide where she wants to go. We know what airports
                    she’s flown to in the past; what’s an airport she’s never been to but would
                    enjoy flying to? Use our historical data to build a machine learning model that
                    can recommend a new flying destination. Then, if you’re up for the challenge,
                    package the model into an iOS app for on-the-go flight planning!
                </p>
            </>
        )
    },
    {
        icon: "https://microicon-clone.vercel.app/domain/ffffff",
        type: "challenge",
        href: "http://api.reimaginebanking.com/",
        title: "Capital One",
        text:
            "Best Financial Hack: How will you reimagine banking?"
    },
    {
        icon: "https://microicon-clone.vercel.app/merge_type/ffffff",
        type: "challenge",
        title: "Two Sigma",
        text:
            "At Two Sigma, we use machine learning, distributed computing and other technologies to find connections in the world’s data. We work with vast quantities of information from over a thousand diverse sources. We love learning from others, and we want to see what you can do in the data science space. We’ll award a prize for the best use of data analysis, data science, or big data technologies."
    },
    {
        icon: "https://microicon-clone.vercel.app/thumb_up/ffffff",
        type: "challenge",
        title: "JP Morgan Chase",
        text:
            "Our challenge will be the JPMorgan Chase “Best Hack for Social Good"
    }
    */
    
].map(card => {
    card.key = `card-${card.title}`;
    return card;
});
