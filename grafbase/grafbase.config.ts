import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 4, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  desc: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
  comments: g.relation(() => Comment).list().optional(),
});

const Project = g.model("Project", {
  title: g.string().length({ min: 3 }),
  desc: g.string().optional(),
  img: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
  comments: g.relation(() => Comment).list().optional(),
  likes: g.int()
});

const Comment = g.model("Comment", {
  comment: g.string().length({ min: 3, max: 100 }),
  sendedBy: g.relation(() => User),
  sendTime:g.date()
});

export default config({
  schema: g,
});
