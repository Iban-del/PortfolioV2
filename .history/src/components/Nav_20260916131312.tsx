


export interface NavProps {
    .dark, .dark-theme {
  --gray-1: #1c1c1c;
  --gray-2: #232323;
  --gray-3: #2c2c2c;
  --gray-4: #323232;
  --gray-5: #383838;
  --gray-6: #404040;
  --gray-7: #4c4c4c;
  --gray-8: #646464;
  --gray-9: #6f6f6f;
  --gray-10: #7b7b7b;
  --gray-11: #b3b3b3;
  --gray-12: #eee;

  --gray-a1: #00000000;
  --gray-a2: #ffffff08;
  --gray-a3: #ffffff12;
  --gray-a4: #ffffff19;
  --gray-a5: #ffffff1f;
  --gray-a6: #ffffff28;
  --gray-a7: #ffffff36;
  --gray-a8: #ffffff51;
  --gray-a9: #ffffff5d;
  --gray-a10: #ffffff6b;
  --gray-a11: #ffffffaa;
  --gray-a12: #ffffffec;

  --gray-contrast: #FFFFFF;
  --gray-surface: rgba(0, 0, 0, 0.05);
  --gray-indicator: #6f6f6f;
  --gray-track: #6f6f6f;
}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
    .dark, .dark-theme {
      --gray-1: oklch(22.6% 0 none);
      --gray-2: oklch(25.6% 0 none);
      --gray-3: oklch(29.1% 0 none);
      --gray-4: oklch(31.6% 0 none);
      --gray-5: oklch(34% 0 none);
      --gray-6: oklch(37.1% 0 none);
      --gray-7: oklch(41.8% 0 none);
      --gray-8: oklch(50.2% 0 none);
      --gray-9: oklch(54.2% 0 none);
      --gray-10: oklch(58.4% 0 none);
      --gray-11: oklch(76.7% 0 none);
      --gray-12: oklch(94.8% 0 none);

      --gray-a1: color(display-p3 0 0 0 / 0);
      --gray-a2: color(display-p3 1 1 1 / 0.0308);
      --gray-a3: color(display-p3 1 1 1 / 0.0705);
      --gray-a4: color(display-p3 1 1 1 / 0.0969);
      --gray-a5: color(display-p3 1 1 1 / 0.1233);
      --gray-a6: color(display-p3 1 1 1 / 0.1586);
      --gray-a7: color(display-p3 1 1 1 / 0.2115);
      --gray-a8: color(display-p3 1 1 1 / 0.3172);
      --gray-a9: color(display-p3 1 1 1 / 0.3656);
      --gray-a10: color(display-p3 1 1 1 / 0.4185);
      --gray-a11: color(display-p3 1 1 1 / 0.6652);
      --gray-a12: color(display-p3 1 1 1 / 0.9251);

      --gray-contrast: #FFFFFF;
      --gray-surface: color(display-p3 0 0 0 / 5%);
      --gray-indicator: oklch(54.2% 0 none);
      --gray-track: oklch(54.2% 0 none);
    }
  }
}
}

const Nav = ({

}:NavProps) => {

    return (
        <nav className="bg-foreground p-4">

        </nav>
    )
}

export default Nav