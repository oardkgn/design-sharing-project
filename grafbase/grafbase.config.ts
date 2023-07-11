import { g, auth, config } from "@grafbase/sdk";

// @ts-ignore
const User = g.model("User", {
  name: g.string().length({ min: 4, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ min: 2, max: 1000 }).optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
}).auth((rules) => {
  rules.public().read()
});

// @ts-ignore
const Project = g.model("Project", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  img: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
  comments: g
    .relation(() => Comment)
    .list()
    .optional(),
  likes: g.int(),
}).auth((rules) => {
  rules.public().read(),
  rules.private().create().delete().update();
});

const Comment = g.model("Comment", {
  comment: g.string().length({ min: 3, max: 100 }),
  sendedBy: g.relation(() => User),
  sendTime: g.date(),
});

const jwt = auth.JWT({
  issuer: "grafbase",
  secret: g.env('NEXTAUTH_SECRET')
});

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  }
});
