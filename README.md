**The fmp api key has expired, so expect bugs in the open demo. The app should still work locally, given the correct api keys.**

Finance chat is your financial assistant empowered by OpenAI, FMP, and Perplexity. Query about financial statistics or news at this [link](https://fmp-finchat.vercel.app/); have fun!

# Functionalities
- The app has a unique tree view which allows user to view different branches of conversation. Play around with it to find out.
- You can manually save your chat locally so you don't lose the data. You can also remove all formerly locally saved data.
- Type `\model o3-mini` or `\model gpt-4o` into the chat and press enter to switch model. (Notice: with o3-mini, your queries will be more accurate, but it will also take longer).

# Local Development
You can run this project locally using `npm run dev`. However, notice that you need to provide secret keys for FMP, OpenAI, and Perplexity. To do that, create a .env.local at the root directory (i.e. `finance-chat/.env.local`) with the following content:
```
FMP_API_KEY=...
PERPLEXITY_API_KEY=...
OPENAI_API_KEY=...
```
It is advised that your have at least a Premium Plan with FMP, as some of the endpoints gpt might call are premium only. It is also advised that you are at least a tier 3 OpenAI API user with access to o3-mini; such that you can have access to their most powerful model. 

**This app only functions if you have all three of the API keys defined.**

# Core Logic
The core logic of how this app answers your questions is defined within `src/lib/pipeline.ts`. If you want to understand the code, I suggest you start there. 

In addition to the backend logic, the frontend logic mostly lies within `app/page.tsx`, switching between `app/components/ChatView/ChatView.tsx` and `app/components/TreeView/TreeView.tsx`.
