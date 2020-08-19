import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import styled from 'styled-components';

import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const { isLoading, githubUser} = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className='loading-img' alt='loding' />
      </main>
    );
  }
  return (
    <main>
    {githubUser ?
    (<><Navbar></Navbar><Search/><Info /><User/><Repos/></>): (<><Navbar></Navbar><Search /></>) }
    </main>

    );
  };



const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;
export default Dashboard;
