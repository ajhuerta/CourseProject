const data = [
    {
      "article_url": "https://www.investopedia.com/ask/answers/108.asp#:~:text=To%20buy%20stocks%2C%20you'll,the%20trade%20should%20be%20handled.",
      "keywords": ["stocks", "stockbroker", "exchange", "nasdaq", "online"]
    },
    {
      "article_url": "https://www.stockmarketloss.com/practice/options/#:~:text=An%20option%20is%20a%20contract,of%20the%20particular%20underlying%20asset).",
      "keywords": ["options", "call", "put", "strike", "shares", "risk"]
    },
    {
      "article_url": "https://www.investopedia.com/investing-in-cryptocurrency-5215269#:~:text=Cryptocurrency%20is%20digital%20money%20that,or%20through%20certain%20broker%2Ddealers.",
      "keywords": ["cryptocurrency", "crypto", "bitcoin", "ethereum", "ico", "exchange"]
    },
    {
      "article_url": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products/bonds#:~:text=A%20bond%20is%20a%20debt,government%2C%20municipality%2C%20or%20corporation.",
      "keywords": ["bonds", "government", "corporate", "predictable", "iou", "treasuries"]
    },
    {
      "article_url": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products-0",
      "keywords": ["bonds", "municipal", "states", "cities", "principle"]
    },
    {
      "article_url": "https://blockworks.co/news/what-is-yield-farming-what-you-need-to-know",
      "keywords": ["crypto", "yield", "farming", "liquidity", "staking", "rug", "pulls"]
    },
    {
      "article_url": "https://www.schwab.com/learn/story/how-traders-can-take-advantage-volatile-markets#:~:text=Sometimes%20prices%20move%20more%20quickly,volatility%20also%20means%20higher%20risk.",
      "keywords": ["traders", "volatility", "change", "price", "risk", "market"]
    },
    {
      "article_url": "https://fred.stlouisfed.org/series/FEDFUNDS",
      "keywords": ["federal", "interest", "rates", "economic", "economy"]
    },
    {
      "article_url": "https://www.indiratrade.com/blog/6-ways-to-reduce-stock-market-risks/16",
      "keywords": ["reduce", "risk", "stocks", "portfolio", "long"]
    },
    {
      "article_url": "https://www.reit.com/what-reit",
      "keywords": ["reit", "estate", "investment", "trust", "mutual"]
    },
    {
      "article_url": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-1",
      "keywords": ["mutual", "funds", "managed", "diverse", "professional"]
    },
    {
      "article_url": "https://www.investopedia.com/terms/d/dotcom-bubble.asp",
      "keywords": ["crash", "dotcom", "bubble", "technology", "nasdaq"]
    },
    {
      "article_url": "https://www.federalreservehistory.org/essays/subprime-mortgage-crisis",
      "keywords": ["crisis", "mortage", "recession", "stocks", "real", "estate"]
    },
    {
      "article_url": "https://www.cnbc.com/2022/12/04/stock-futures-are-little-changed-as-investors-enter-a-quiet-period-ahead-of-the-feds-december-policy-meeting.html",
      "keywords": ["current", "news", "down", "dow", "jones"]
    },
    {
      "article_url": "https://www.coindesk.com/markets/2022/12/06/first-mover-americas-goldman-to-spend-big-on-crypto-post-ftx/",
      "keywords": ["current", "news", "crypto", "fear", "bitcoin"]
    },
    {
      "article_url": "https://www.cnbc.com/2022/12/04/cramer-on-hot-industrial-stocks-and-how-were-playing-the-tech-pivot.html",
      "keywords": ["cnbc", "cramer", "stocks", "industrial", "tech", "hot"]
    },
    {
      "article_url": "https://finance.yahoo.com/news/best-dividend-stocks-according-jim-162345578.html",
      "keywords": ["dividend", "cramer", "stocks", "yield", "ko", "cnbc"]
    },
    {
      "article_url": "https://www.fool.com/investing/2022/12/04/3-high-yield-tech-stocks-to-buy-in-december/",
      "keywords": ["high", "yield", "tech", "stocks", "invest", "grow"]
    },
    {
      "article_url": "https://www.forbes.com/advisor/investing/best-utilities-stocks/",
      "keywords": ["utility", "stocks", "buy", "divident", "yield", "invest"]
    },
    {
      "article_url": "https://money.usnews.com/investing/stock-market-news/slideshows/best-bank-stocks-to-buy-this-year",
      "keywords": ["bank", "stocks", "buy", "yield", "grow", "invest"]
    },
    {
      "article_url": "https://www.forbes.com/advisor/investing/best-industrial-stocks/",
      "keywords": ["industrial", "stocks", "buy", "invest", "grow"]
    },
    {
      "article_url": "https://www.cnbc.com/2022/12/05/sam-bankman-fried-could-face-years-in-prison-over-ftx-meltdown.html",
      "keywords": ["ftx", "crypto", "jail", "fraud", "bankruptcy"]
    },
    {
      "article_url": "https://www.investopedia.com/terms/i/ironcondor.asp",
      "keywords": ["iron", "condor", "options", "trade", "spread"]
    },
    {
      "article_url": "https://www.nerdwallet.com/best/investing/online-brokers-for-beginners",
      "keywords": ["invest", "brokers", "online", "trade", "platforms"]
    },
    {
      "article_url": "https://www.treasurydirect.gov/savings-bonds/i-bonds/",
      "keywords": ["bonds", "inflation", "safe", "interest", "government"]
    },
    {
      "article_url": "https://www.cnbc.com/select/2022-financial-new-years-resolutions-americans/",
      "keywords": ["money", "savings", "debt", "loans", "finance"]
    },
    {
      "article_url": "https://www.forbes.com/sites/isabelcontreras/2022/06/07/the-future-of-personal-finance-fintech-50-2022/?sh=1e9e1b485235",
      "keywords": ["fintech", "finance", "future", "bank", "account"]
    },
    {
      "article_url": "https://www.forbes.com/sites/baldwin/2022/11/10/wall-street-goes-crazy-the-numbers/?sh=75044a6681fb",
      "keywords": ["numbers", "crazy", "stokes", "invectors", "price"]
    },
    {
      "article_url": "https://money.usnews.com/money/personal-finance/saving-and-budgeting/slideshows/ways-to-improve-your-finances",
      "keywords": ["interest", "rate", "inflation", "financial", "improve"]
    },
    {
      "article_url": "https://www.nerdwallet.com/article/investing/how-to-buy-stocks",
      "keywords": ["stock", "buy", "owner", "consumer", "shareholders"]
    },
    {
      "article_url": "https://www.forbes.com/advisor/investing/how-to-buy-stocks/",
      "keywords": ["stock", "share", "purchase", "income", "value"]
    },
    {
      "article_url": "https://www.investopedia.com/articles/basics/06/invest1000.asp",
      "keywords": ["invest", "money", "beginner", "guide", "consume"]
    },
    {
      "article_url": "https://www.investopedia.com/ask/answers/how-do-you-calculate-percentage-gain-or-loss-investment/",
      "keywords": ["gain", "loss", "invest", "price", "cost"]
    },
    {
      "article_url": "https://www.investopedia.com/world-s-11-greatest-investors-4773356",
      "keywords": ["investor", "money", "market", "debt", "cash"]
    },
    {
      "article_url": "https://www.investopedia.com/ask/answers/070915/how-can-i-access-companys-earnings-report.asp",
      "keywords": ["company", "earning", "business", "shareholder", "financial"]
    },
    {
      "article_url": "https://www.investopedia.com/articles/investing/052313/financial-markets-capital-vs-money-markets.asp",
      "keywords": ["money", "market", "capital", "financial", "debt"]
    },
    {
      "article_url": "https://www.investopedia.com/articles/younginvestors/10/what-is-an-investment.asp",
      "keywords": ["invest", "owner", "lend", "cash", "stoke"]
    },
    {
      "article_url": "https://www.investopedia.com/terms/r/ruleof72.asp",
      "keywords": ["money", "invest", "GDP", "inflation", "growth"]
    },
    {
      "article_url": "https://www.investopedia.com/ask/answers/06/investduringbearmarket.asp",
      "keywords": ["money", "bear", "market", "asset", "portfolio"]
    },
    {
      "article_url": "https://www.investopedia.com/articles/investing/102715/calculating-internal-rate-return-using-excel.asp",
      "keywords": ["discount", "rate", "return", "cash", "economic"]
    },
    {
      "article_url": "https://www.businessinsider.com/personal-finance/how-to-buy-stock",
      "keywords": ["stock", "personal", "finance", "portfolio", "holdings"]
    },
    {
      "article_url": "https://money.com/how-to-buy-stocks/",
      "keywords": ["money", "invest", "debt", "stoke", "market"]
    },
    {
      "article_url": "https://money.com/how-to-save-money/",
      "keywords": ["save", "money", "financial", "expense", "fund"]
    },
    {
      "article_url": "https://money.com/how-to-buy-gold/",
      "keywords": ["buy", "gold", "saving", "invest", "value"]
    },
    {
      "article_url": "https://money.com/save-for-retirement/",
      "keywords": ["save", "money", "social", "security", "financial"]
    },
    {
      "article_url": "https://money.com/how-to-choose-a-financial-advisor/",
      "keywords": ["financial", "advice", "tax", "debt", "asset"]
    },
    {
      "article_url": "https://www.cnbc.com/select/how-to-buy-stocks/",
      "keywords": ["buy", "stoke", "sell", "broker", "fund"]
    },
    {
      "article_url": "https://www.cnbc.com/2022/12/02/stocks-making-the-biggest-moves-midday-zscaler-marvell-doordash-and-more.html",
      "keywords": ["stoke", "move", "earning", "share", "revenue"]
    },
    {
      "article_url": "https://www.cnbc.com/2022/12/04/tax-strategy-that-may-offset-losses-but-investors-need-to-act-now.html",
      "keywords": ["tax", "loss", "investor", "bill", "market"]
    },
    {
      "article_url": "https://www.cnbc.com/2022/12/02/goldman-sachs-warns-traders-of-shrinking-bonus-pool-as-wall-street-hunkers-down-.html",
      "keywords": ["industry", "banking", "revenue", "decline", "CEO"]
    },
    {
      "article_url": "https://www.bankrate.com/banking/savings/how-to-save-money/",
      "keywords": ["moeny", "save", "inflation", "spending", "bill"]
    },
    {
      "article_url": "https://www.usnews.com/news/business/articles/2022-12-03/rail-workers-say-deal-wont-resolve-quality-of-life-concerns",
      "keywords": ["deal", "quality-of-life", "concern", "worker", "contract"]
    },
    {
      "article_url": "https://www.nerdwallet.com/article/investing/free-financial-advice",
      "keywords": ["financial", "advice", "401k", "bank", "online"]
    },
    {
      "article_url": "https://www.investopedia.com/articles/younginvestors/08/eight-tips.asp",
      "keywords": ["young", "tips", "learn", "tax", "fund", "retirement", "budget"]
    },
    {
      "article_url": "https://www.magnifymoney.com/investing/financial-advice/",
      "keywords": ["advice", "robo-advisor", "AFCPE", "NFCC"]
    },
    {
      "article_url": "https://www.nerdwallet.com/article/investing/how-to-invest-money",
      "keywords": ["investment", "goal", "account", "combination", "risk", "tolerance"]
    },
    {
      "article_url": "https://www.nerdwallet.com/article/investing/how-to-start-investing",
      "keywords": ["invest", "beginner", "start", "amount", "strategy"]
    },
    {
      "article_url": "https://hbr.org/2021/08/how-to-make-smart-investments-a-beginners-guide",
      "keywords": ["investment", "smart", "saver", "spender", "market"]
    },
    {
      "article_url": "https://www.policygenius.com/personal-finance/news/the-best-personal-finance-websites/",
      "keywords": ["money", "websites", "policygenius", "career"]
    },
    {
      "article_url": "https://www.fool.com/investing/how-to-invest/stocks/",
      "keywords": ["stock", "investment", "approach", "asset", "allocation", "account"]
    },
    {
      "article_url": "https://www.bankrate.com/investing/best-investments/",
      "keywords": ["investment", "now", "wealth", "high-yield", "short-term"]
    },
    {
      "article_url": "https://money.usnews.com/investing/funds/slideshows/best-high-dividend-etfs",
      "keywords": ["ETFs", "high-dividend", "reinvest", "stock"]
    },
    {
      "article_url": "https://www.usnews.com/news/economy/articles/2022-12-02/263-000-jobs-added-in-november-dashing-expectations-while-october-revised-sharply-highe",
      "keywords": ["jobs", "dashing", "november", "unemployment", "interest"]
    },
    {
      "article_url": "https://money.usnews.com/money/retirement/aging/articles/questions-to-ask-yourself-during-retirement-planning",
      "keywords": ["retirement", "plan", "investment", "affair", "when"]
    },
    {
      "article_url": "https://money.usnews.com/money/personal-finance/articles/home-based-business-ideas",
      "keywords": ["low-cost", "business", "home-based", "inflation", "knowledge-based"]
    },
    {
      "article_url": "https://money.usnews.com/investing/stock-market-news/slideshows/upstart-tesla-competitors-to-watch",
      "keywords": ["stocks", "vehicle", "Chinese-EV", "automotive"]
    },
    {
      "article_url": "https://money.usnews.com/money/personal-finance/taxes/articles/state-and-local-taxes-what-is-the-salt-deduction",
      "keywords": ["SALT", "deduction", "tax break", "tax rate", "real estate"]
    },
    {
      "article_url": "https://money.usnews.com/credit-cards/articles/how-long-does-a-late-payment-stay-on-your-credit-report",
      "keywords": ["credit", "late payment", "report", "score", "avoid"]
    },
    {
      "article_url": "https://www.investopedia.com/investing/habits-of-successful-real-estate-investors/",
      "keywords": ["real estate", "investor", "habits", "challenging", "knowledge", "risk"]
    },
    {
      "article_url": "https://www.epa.gov/waterfinancecenter/financial-technical-assistance-and-tools-water-infrastructure",
      "keywords": ["assitance", "infrastructure", "tools", "water", "revenue", "expense"]
    },
    {
      "article_url": "https://savoteur.com/financial-literacy-tips/",
      "keywords": ["financial literacy", "budget", "details", "realistic", "separate account"]
    },
    {
      "article_url": "https://www.careersourcecentralflorida.com/job-journal/improve-your-financial-well-being-with-these-10-tips/",
      "keywords": ["well-being", "tips", "budget", "529 plan", "track"]
    },
    {
      "article_url": "https://www.firstcitizens.com/personal/insights/security/tips-for-boosting-financial-safety",
      "keywords": ["safety", "statement", "monitor", "notification", "digital wallet", "password"]
    },
    {
      "article_url": "https://www.washtrust.com/blog/money-saving-tips-for-2022",
      "keywords": ["save", "tips", "credit", "load", "ignorance", "homework"]
    },
    {
      "article_url": "https://www.investopedia.com/terms/i/investmentbank.asp",
      "keywords": ["investment bank", "IPO", "JPMorgan", "intermediary", "transaction"]
    }
]

export default data;
