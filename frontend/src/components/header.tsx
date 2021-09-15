import React from 'react';

type HeaderProps = {
    title: String
}

export const Header = ({title}: HeaderProps) => (
  <div>
    <h1>{title}</h1>
  </div>
);