@AGENTS.md

## Claude Code specifics

- Start the dev server with the preview tooling, not a background shell: an
  orphaned server keeps its port. `.claude/launch.json` has `quartz`
  (8080) and `quartz-alt` (8081) for when another session holds 8080. Before
  trusting what the browser shows, confirm the server's `cwd` in
  `preview_list` is your own worktree.
- Sessions run in git worktrees under `.claude/worktrees/`, with `main` checked
  out in the main folder, so a worktree can't `git switch main`. Branch from
  `origin/main`, and run
  `gh pr merge <n> -R vishmatta/ai-agent-ecosystem --squash --delete-branch`
  from outside the worktree, or it tries to switch to `main`.
