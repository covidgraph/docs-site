---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac euismod odio, eu consequat dui. Nullam molestie consectetur risus id imperdiet. Proin sodales ornare turpis, non mollis massa ultricies id. Nam at nibh scelerisque, feugiat ante non, dapibus tortor. Vivamus volutpat diam quis tellus elementum bibendum. Praesent semper gravida velit quis aliquam. Etiam in cursus neque. Nam lectus ligula, malesuada et mauris a, bibendum faucibus mi. Phasellus ut interdum felis. Phasellus in odio pulvinar, porttitor urna eget, fringilla lectus. Aliquam sollicitudin est eros. Mauris consectetur quam vitae mauris interdum hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!