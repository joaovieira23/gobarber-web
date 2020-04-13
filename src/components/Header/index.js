import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Noticiations from '~/components/Notifications';

import logo from '~/assets/logo-interna.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Noticiations />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.pngCopy'
              }
              alt="João Victor Vieira"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
