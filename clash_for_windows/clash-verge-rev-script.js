const enable = true;

function main(config) {
    if (!enable) return config;
    modify_rules(config);
    set_AI_group(config);
    return config;
}

// 自定义规则
function modify_rules(params) {
    const rules_SCI = [
        'DOMAIN-KEYWORD,ncbi,DIRECT',
        'DOMAIN-KEYWORD,sciencedirect,DIRECT',
        'DOMAIN-KEYWORD,wustl,DIRECT',
        'DOMAIN-KEYWORD,david,DIRECT',
        'DOMAIN-KEYWORD,nature,DIRECT',
        'DOMAIN-KEYWORD,science,DIRECT',
    ];

    const rules_AI = [
        'DOMAIN-SUFFIX,openai.com,ChatGPT',
        'DOMAIN,gemini.google.com,ChatGPT',
    ];

    const rules_usally = [
        'DOMAIN-KEYWORD,keke1,DIRECT',
    ];

    params.rules = rules_SCI.concat(rules_AI, rules_usally, params.rules);
}

// AI组配置
function set_AI_group(params) {

    // 排除的关键字，忽略大小写
    const mustNotHaveKeywords = [
        '实验性', '香港', '日本', '台湾', 'TW',
        "剩余", "到期", "主页", "官网", "游戏", "关注", "网站", "地址", "有效", "网址", "禁止", "邮箱", "发布", "客服", "订阅", "节点", "问题", "联系"
    ];

    // 构造排除关键字的正则表达式
    const regex = new RegExp(`^(?!.*(${mustNotHaveKeywords.join('|')})).*$`, 'i');

    const rules = [
        "DOMAIN-KEYWORD,cloudfare,ChatGPT",
        "DOMAIN-KEYWORD,openai,ChatGPT",
        "DOMAIN-KEYWORD,sentry,ChatGPT",
        "DOMAIN-SUFFIX,ai.com,ChatGPT",
        "DOMAIN-SUFFIX,auth0.com,ChatGPT",
        "DOMAIN-SUFFIX,challenges.cloudflare.com,ChatGPT",
        "DOMAIN-SUFFIX,client-api.arkoselabs.com,ChatGPT",
        "DOMAIN-SUFFIX,events.statsigapi.net,ChatGPT",
        "DOMAIN-SUFFIX,featuregates.org,ChatGPT",
        "DOMAIN-SUFFIX,identrust.com,ChatGPT",
        "DOMAIN-SUFFIX,ingest.sentry.io,ChatGPT",
        "DOMAIN-SUFFIX,intercom.io,ChatGPT",
        "DOMAIN-SUFFIX,intercomcdn.com,ChatGPT",
        "DOMAIN-SUFFIX,openai.com,ChatGPT",
        "DOMAIN-SUFFIX,openaiapi-site.azureedge.net,ChatGPT",
        "DOMAIN-SUFFIX,stripe.com,ChatGPT"
    ];

    // 过滤掉名称包含排除关键字的代理节点
    const proxies = params.proxies
        .filter(i => regex.test(i.name))  // 保留不包含排除关键字的代理
        .map(e => e.name);  // 提取代理节点名称

    const groups = params["proxy-groups"];

    // 检查是否已经有名为 "ChatGPT" 的代理组，避免重复添加
    if (!groups.some(group => group.name === "ChatGPT")) {
        const newGroup = createGroup("ChatGPT", "select", proxies);  // 创建新的 ChatGPT 组
        // groups.splice(1, 0, newGroup);  // 在第二个位置插入新组
        groups.unshift(newGroup); // 将新组插入到第一个位置
    }

    // 合并规则，去重
    params.rules = [...new Set(rules.concat(params.rules))];

    return params;
}

// 创建代理组
function createGroup(name, type, proxies) {
    return {
        name: name,
        type: type,
        proxies,
    };
}
