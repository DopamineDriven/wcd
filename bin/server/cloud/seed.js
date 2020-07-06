"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var mongodb_1 = require("mongodb");
var utils_1 = require("../utils");
var posts = [
    {
        _id: new mongodb_1.ObjectId(),
        id: 1,
        title: "Musk says SpaceX is 'fixing' brightness from satellites",
        date: "2020-04-23",
        category: "Technology",
        source: "https://www.bbc.com/news/technology-52391758",
        image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/A3DE/production/_111905914_0fe64502-c5a8-4734-8f38-ce9a68eb0197.jpg",
        lead: 'SpaceX chief executive Elon Musk said the company was "fixing" the brightness of his company\'s satellites.',
        content: '<p>SpaceX chief executive Elon Musk said the company was "fixing" the brightness of his company\'s satellites.</p><p>Stargazers around the world and including many Britons have witnessed unusual constellations made up of the low earth orbit spacecraft.</p><p>SpaceX has been launching large batches of satellites as part of its Starlink project to improve global internet coverage.</p>',
    },
    {
        _id: new mongodb_1.ObjectId(),
        id: 2,
        title: "Apple iPhone at risk of hacking through email app",
        date: "2020-04-23",
        category: "Technology",
        source: "https://www.bbc.com/news/technology-52391759",
        image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/67A6/production/_106743562_apple2getty.jpg",
        lead: "A flaw in Apple's mobile operating system may have left millions of iPhone and iPad users vulnerable to hackers.",
        content: '<p>A flaw in Apple\'s mobile operating system may have left millions of iPhone and iPad users vulnerable to hackers.</p><p>Research published by ZecOps, a mobile security firm, said a bug in the Mail app made devices susceptible to sophisticated attacks.</p><p>The firm said it had "high confidence" the bug has been used to exploited at least six high-profile victims.</p>'
    },
    {
        _id: new mongodb_1.ObjectId(),
        id: 3,
        title: "Twitter bans incitement to attack 5G towers",
        date: "2020-04-23",
        category: "Technology",
        source: "https://www.bbc.com/news/technology-52395158",
        image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/A78A/production/_111909824_twitter.png",
        lead: 'Twitter is to delete "unverified claims" that could lead directly to the destruction of critical infrastructure or cause widespread panic.',
        content: '<p>Twitter is to delete "unverified claims" that could lead directly to the destruction of critical infrastructure or cause widespread panic.</p><p>It changed its rules following a series of attacks on mobile phone towers in the UK, fuelled by the spread of false conspiracy theories on social media.</p><p>Twitter said it would not remove 5G and coronavirus misinformation, but would remove direct incitement to action.</p>'
    },
    {
        _id: new mongodb_1.ObjectId(),
        id: 4,
        title: "Tsunami risk identified near future Indonesian capital",
        date: "2020-04-23",
        category: "Science",
        source: "https://www.bbc.com/news/science-environment-52388352",
        image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/84D0/production/_111900043_3.jpg",
        lead: "Scientists have identified a potential tsunami risk in the region chosen by Indonesia for its new capital.",
        content: "<p>Scientists have identified a potential tsunami risk in the region chosen by Indonesia for its new capital.</p><p>The researchers mapped evidence of multiple ancient underwater landslides in the Makassar Strait between the islands of Borneo and Sulawesi.</p><p>If the largest of these were repeated today, it would generate tsunami capable of inundating Balikpapan Bay - an area close to the proposed capital.</p>"
    },
    {
        _id: new mongodb_1.ObjectId(),
        id: 5,
        title: "Antarctica's A-68: Is the world's biggest iceberg about to break up?",
        date: "2020-04-23",
        category: "Science",
        source: "https://www.bbc.com/news/science-environment-52395008",
        image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/17B42/production/_111909079_berg.jpg",
        lead: "The world's biggest iceberg, A-68, just got a little smaller.",
        content: "<p>The world's biggest iceberg, A-68, just got a little smaller.</p><p>At around 5,100 sq km, the behemoth has been the largest free-floating block of ice in Antarctica since it broke away from the continent in July 2017.</p><p>But on Thursday, it dropped a sizeable chunk measuring about 175 sq km.</p>"
    },
    {
        _id: new mongodb_1.ObjectId(),
        id: 6,
        title: "Climate change: 2019 was Europe's warmest year on record",
        date: "2020-04-22",
        category: "Science",
        source: "https://www.bbc.com/news/science-environment-52380157",
        image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/15462/production/_111883178_eu4.png",
        lead: "Europe is heating faster than the global average as new data indicates that last year was the warmest on record.",
        content: "<p>Europe is heating faster than the global average as new data indicates that last year was the warmest on record.</p><p>While globally the year was the second warmest, a series of heatwaves helped push the region to a new high mark.</p><p>Over the past five years, global temperatures were, on average, just over 1C warmer than at the end of the 19th century."
    },
    {
        _id: new mongodb_1.ObjectId(),
        id: 7,
        title: "Andrew Ross",
        date: "2020-06-22",
        category: "People",
        source: "https://github.com/DopamineDriven",
        image: "https://res.cloudinary.com/asross311/image/upload/v1592831978/ASR_Assets/cropped-a_nqaem7.png",
        lead: "CTO",
        content: "<p>First and foremost, TypeScript puts the super in superset, especially in a team environment. State management in React can be cumbersome, which is why I consider GraphQL and Apollo to be the dynamic duo. That said, Redux and Recoil each have their use-cases as well.</p><p>As far as primary prebuilts are concerened, the \"Next.js\" framework is top-notch. It removes the otherwise tedious process of manually configuring Webpack to support a server-side rendering app from the equation. It saves time, simplifies optimization, and delivers blazing fast performance to ultimately enhance end-user experience.</p><p> \"The mechanic that would perfect his work must first sharpen his tools.\" - <em>Confucius</em></p><br />"
    },
    {
        _id: new mongodb_1.ObjectId(),
        id: 8,
        title: "Joe Shields",
        date: "2020-06-21",
        category: "People",
        source: "https://github.com/JShields30",
        image: "https://res.cloudinary.com/asross311/image/upload/v1592801826/ASR_Assets/Joe_vlnzpm.jpg",
        lead: "CEO",
        content: "<p>Software Engineer skilled in both back-end and front-end, with particular interest in design and UX-UI experience. My career as a director of market research inspired me to pursue my true passion of creating web applications. I love being creative and unique, but I also appreciate the technical challenges of back-end development. When programming I follow structure and order, since this is essential when creating quality web applications. I enjoy debugging and critiquing small details, as well as optimizing applications. Working in a team setting is ideal, because more knowledge is obtained and retained between developers.</p>"
    },
    {
        _id: new mongodb_1.ObjectId(),
        id: 9,
        title: "Genghis Yong",
        date: "2020-06-21",
        category: "People",
        source: "https://github.com/yhlee-dho",
        image: "https://res.cloudinary.com/asross311/image/upload/v1592800832/ASR_Assets/Yong_ehso3r.png",
        lead: "COO",
        content: "<p>Currently working on a new discord bot -- \"WAFFLES\". Everyone is going to want a piece of that syrupy, flaky, Yonglicious good-good.</p>"
    },
];
// sprinkle some try-catch syntactical sugar on this async promise
var seed = function () { return __awaiter(void 0, void 0, void 0, function () {
    var db, _i, posts_1, post, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                console.log("[seed]: running...");
                return [4 /*yield*/, utils_1.connectDatabase()];
            case 1:
                db = _a.sent();
                _i = 0, posts_1 = posts;
                _a.label = 2;
            case 2:
                if (!(_i < posts_1.length)) return [3 /*break*/, 5];
                post = posts_1[_i];
                return [4 /*yield*/, db.posts.insertOne(post)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                console.log("[seed]: success");
                return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                throw new Error("failed to seed database");
            case 7: return [2 /*return*/];
        }
    });
}); };
seed();
//# sourceMappingURL=seed.js.map