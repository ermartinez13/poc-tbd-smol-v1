# Intro

This repo contains the results from my intial attempt to generate a POC for the following [idea](https://handsome-femur-998.notion.site/TBD-d2425bb47fc1408e90e4ab928590f0bb?pvs=4) using AI. In particular, I am using [smol developer](https://github.com/smol-ai/developer) a self-described junior developer agent that can scaffold you the entire building blocks of an application given a detailed prompt.

To see and play around with the generated application, checkout [this](https://codesandbox.io/p/github/ermartinez13/poc-with-smol-v1/main?file=%2FREADME.md&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clnetp2t100073b6fu7vifc1k%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clnetp2t000033b6fgdeatqus%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clnetp2t000053b6f71tv81hd%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clnetp2t100063b6fymhurxuz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B43.83046380694131%252C56.16953619305869%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clnetp2t000033b6fgdeatqus%2522%253A%257B%2522id%2522%253A%2522clnetp2t000033b6fgdeatqus%2522%252C%2522activeTabId%2522%253A%2522clnetp2t000023b6fsroil9f0%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clnetp2t000023b6fsroil9f0%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fprompt.md%2522%252C%2522id%2522%253A%2522clnf0qju000703b6ga0digxeo%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clnetp2t100063b6fymhurxuz%2522%253A%257B%2522id%2522%253A%2522clnetp2t100063b6fymhurxuz%2522%252C%2522activeTabId%2522%253A%2522clnetspbr00gh3b6fl5dfwk59%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clnetspbr00gh3b6fl5dfwk59%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clnetp2t000053b6f71tv81hd%2522%253A%257B%2522id%2522%253A%2522clnetp2t000053b6f71tv81hd%2522%252C%2522activeTabId%2522%253A%2522clnetp2t000043b6ff5hc2yui%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clnetp2t000043b6ff5hc2yui%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clnetp322000pe5ex3o876xvr%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clnetsnbm00ev3b6frokcmq1w%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) codesandbox.

# Smol-AI Setup

The [smol developer's repo mode section](https://github.com/smol-ai/developer#in-git-repo-mode) provides straightforward instructions for executing the AI agent in your local machine, but I had to do some additional steps to get everything working.

1. Install [poetry](https://python-poetry.org/docs/#installation)

- the official installer method (`curl -sSL https://install.python-poetry.org | python3 -`) yielded a `SSL: CERTIFICATE_VERIFY_FAILED` error that the following stack overlow [post](https://stackoverflow.com/questions/52805115/certificate-verify-failed-unable-to-get-local-issuer-certificate) helped me solve.

2. Execute Program Using ['poetry run'](https://python-poetry.org/docs/basic-usage/#using-your-virtual-environment)

- note: I do not have much python experience, so perhaps there is an easier way to execute the smol developer agent usign poetry than using the virtual environment it creates.

3. Set OpenAI Key as an environment variable

- I chose to set it as follows: `OPENAI_API_KEY=[YOUR KEY HERE] poetry run python main.py --prompt prompt.md`

# Cost

The costs of generating the code were:

- 72 cents
- ~3 hours (includes learning how to setup and run smol developer, reviewing example prompt files, building initial prompt, and troubleshooting initial execution)

# The Generated Code

The unmodified code generated by the smol developer agent is located in the `/generated` folder.

The files were then copied and modified (eg. changed extensions, fixed bugs) within the `/src` folder to make them run with the [vite](https://vitejs.dev/) react template.

## Bugs

I may have been hoping for a flawless result but I was not surprised to find a number of bugs in the generated files.

The bugs that I first noticed and addressed were more surface level (eg. providing the wrong arguments to a function call, using the incorrect type for component's state, typos in variable names).

Then, I started to manually verify its functionality and found that certain feature specs hadn't been implemented as I had intended or specified. I began starting to address some of those shortcomings but realized that I'd end up investing more time fixing those issues than I'd be willing to invest. The more time efficient approach should be to simply update my prompt and try again.

## Additional Iterations

This repo only holds the initial prompt and its generated files. To see subsequent iterations, visit the links below:

[Version 2](https://github.com/ermartinez13/poc-with-smol-v2)
[Version 3](https://github.com/ermartinez13/tbd-poc-v1)

# Resouces

I first heard about [smol developer](https://github.com/smol-ai/developer) from the [Latent Space podcast](https://www.latent.space/podcast).
