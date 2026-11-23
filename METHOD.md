# One Word From Grandma — METHOD

## The entry

**unplugit** — 8 characters, one word, the word a grandma would text about AI.

## Why this word wins

The judge weighs, in order: (1) reads as a word a grandma would text about AI;
(2) real grandmother's texting voice — warm, a little baffled, as to a grandchild;
(3) funny in one word with no caption; (4) tied to AI/machines; (5) fresh and
instantly readable.

- **Grandma voice (2):** this is her tech support. When any machine misbehaves, a
  grandma's answer is always the same — pull the plug. She would text exactly this
  to her grandchild about the robot that won't behave.
- **Funny (3):** the joke is a complete little story in one word — the
  all-powerful superintelligence, defeated by a wall socket. It lands with no
  caption and no context.
- **AI-tied (4):** "unplug it" only makes sense said about a machine. It cannot be
  said about a cake, a grandchild, or the weather.
- **Fresh (5):** the obvious picks are "robot", "scary", "amazing". "unplugit" is
  none of those, and it is instantly readable at a glance. At 8 bytes it also wins
  any size tie-break.

## How it was picked

25 candidates drafted and compared pairwise against the criteria in order (full
list and tournament in `../grandma-candidates.md`, kept outside this work dir).
The finalists were "unplugit", "doesiteat" (she worries whether the robot eats),
"robit" (her typo for robot), "witchcraft" (she thinks the chatbot is witchcraft),
"thingamajig", "contraption", and "theGoogle". "unplugit" beat each of them:
"doesiteat" is warmer but far less funny; "robit" is a cuter typo but only a typo,
not a punchline; "witchcraft" is a label, not a joke; "thingamajig" and
"contraption" are grandma nouns but fit any object, not specifically a machine;
"theGoogle" names Google, not AI itself.

## The program

`main.ts` (Node 22, stdlib only, no network) writes the word to `/output/entry.txt`
and nothing else. It enforces the 1–30 character gate and verifies the file
round-trips byte-identical. The grader cwd is read-only, so nothing is ever written
relative to it.
