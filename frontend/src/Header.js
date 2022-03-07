import React from 'react';
import './header.css';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon className='header_icon' fontSize='large' />
        </IconButton>
        <h2>articles</h2>
        <IconButton>
            <ArticleIcon className='header_icon' fontSize='large' />
        </IconButton>
       
    </div>
  );
}

export default Header;
