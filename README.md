# Two-Sentence Horror

[![Two-Sentence Horror](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/luckylawless1/two-sentence-horror/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/luckylawless1/two-sentence-horror/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

A [make.fun](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253) bounty entry for the **Two-Sentence Horror** competition: write the scariest horror story you can in exactly two sentences.

## The entry

> Every night my son makes me check his closet and under his bed before he will sleep, and tonight I finally asked him what he thinks is hiding there. 'Nothing,' he whispered, 'I just have to make sure it's really you doing the checking.'

The ritual is not about a monster in the closet. It is a nightly identity check — and the chill is the question it leaves behind: what happened on the night it was not really the parent doing the checking?

## How it works

`main.ts` (Node 22, standard library only) writes the story to `/output/entry.txt` — exactly two sentences, 236 characters, well inside the gate's 1–400 character limit.

```sh
node main.ts
cat /output/entry.txt
```

The output is deterministic: repeated runs produce byte-identical output.
