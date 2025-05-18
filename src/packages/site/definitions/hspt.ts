/**
 * FIXME 无号，未进行测试
 * 由 resource/sites/hspt.club/config.json 自动转换而来
 */
import { ISiteMetadata } from "@ptd/site";
import { CategoryInclbookmarked, CategoryIncldead, CategorySpstate, SchemaMetadata } from "../schemas/NexusPHP";

export const siteMetadata: ISiteMetadata = {
  ...SchemaMetadata,
  version: 1,

  id: "hspt",
  name: "回声PT",
  description: "近来可好？",
  tags: ["综合", "影视"],
  timezoneOffset: "+0800",

  type: "private",
  schema: "NexusPHP",

  collaborator: ["liuyunfz"],

  urls: ["https://hspt.club/"],

  levelRequirements: [
    {
      id: 1,
      name: "(回音者) 𝑷𝒐𝒘𝒆𝒓 𝑼𝒔𝒆𝒓",
      interval: "P1W",
      downloaded: "10GB",
      ratio: 1.1,
      seedingPoints: 40000,
      privilege: "得到一个邀请名额",
    },
    {
      id: 2,
      name: "(共鸣者) 𝑹𝒆𝒔𝒐𝒏𝒂𝒏𝒄𝒆",
      interval: "P1W",
      downloaded: "120GB",
      ratio: 1.55,
      seedingPoints: 80000,
    },
    {
      id: 3,
      name: "(和谐者) 𝑯𝒂𝒓𝒎𝒐𝒏𝒚",
      interval: "P4W",
      downloaded: "300GB",
      ratio: 2.05,
      seedingPoints: 150000,
      privilege: "得到两个邀请名额",
    },
    {
      id: 4,
      name: "(回荡者) ʀᴇᴠᴇʀʙᴇʀᴀᴛɪᴏɴ",
      interval: "P25W",
      downloaded: "500GB",
      ratio: 2.55,
      seedingPoints: 250000,
    },
    {
      id: 5,
      name: "(雷鸣者) ᴛʜᴜɴᴅᴇʀ",
      interval: "P40W",
      downloaded: "750GB",
      ratio: 3.05,
      seedingPoints: 400000,
      privilege: "得到三个邀请名额",
    },
    {
      id: 6,
      name: "(巅峰者) Ⱥᵽɇx",
      interval: "P60W",
      downloaded: "1024GB",
      ratio: 3.55,
      seedingPoints: 600000,
    },
    {
      id: 7,
      name: "(传承者) ʟᴇɢᴀᴄy",
      interval: "P80W",
      downloaded: "1536GB",
      ratio: 4.05,
      seedingPoints: 800000,
      privilege: "得到五个邀请名额",
    },
    {
      id: 8,
      name: "(永恒者) 𝕰𝖙𝖊𝖗𝖓𝖎𝖙𝖞",
      interval: "P100W",
      downloaded: "3072GB",
      ratio: 4.55,
      seedingPoints: 1000000,
      privilege: "得到十个邀请名额",
    },
  ],
  category: [
    {
      name: "分类",
      key: "cat",
      options: [
        {
          name: "电影",
          value: 401,
        },

        {
          name: "纪录片",
          value: 404,
        },

        {
          name: "动漫",
          value: 405,
        },

        {
          name: "电视剧",
          value: 402,
        },

        {
          name: "综艺",
          value: 403,
        },

        {
          name: "体育",
          value: 407,
        },

        {
          name: "其他",
          value: 409,
        },

        {
          name: "音轨",
          value: 420,
        },
      ],
      cross: { mode: "append", key: "cat" },
    },
    CategoryIncldead,
    CategorySpstate,
    CategoryInclbookmarked,
  ],
};
