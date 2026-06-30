"use client";
import { useEffect, useState } from "react";

/** Cycles through phrases with a typing + deleting effect. */
export function useTypewriter(phrases: string[], speed = 70, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const done = text === current;
    const cleared = text === "";

    let delay = deleting ? speed / 2 : speed;
    if (done && !deleting) delay = pause;
    if (cleared && deleting) delay = 300;

    const t = setTimeout(() => {
      if (!deleting && done) setDeleting(true);
      else if (deleting && cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, speed, pause]);

  return text;
}
