'use client'

// React
import { useState } from 'react'

// MUI
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'

// Hook
import useVerticalNav from '@menu/hooks/useVerticalNav'

const NavSearch = () => {
  const { isBreakpointReached } = useVerticalNav()
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  return isBreakpointReached ? (
    <IconButton className='text-textPrimary'>
      <i className='ri-search-line' />
    </IconButton>
  ) : (
    <div className='relative flex items-center gap-2 cursor-text'>
      <IconButton className='text-textPrimary'>
        <i className='ri-search-line' />
      </IconButton>

      {/* The invisible input stacked on top */}
      <div className='relative'>
        <InputBase
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder=''
          inputProps={{
            'aria-label': 'search',
            className:
              'absolute top-0 left-0 w-full h-full bg-transparent outline-none text-textPrimary placeholder:opacity-50'
          }}
          className='absolute top-0 left-0 w-full h-full'
          sx={{ width: '100%' }}
        />

        {/* Always visible base text */}
        <div
          className={`whitespace-nowrap select-none pointer-events-none ${
            query ? 'opacity-30' : 'opacity-100'
          } text-textDisabled`}
        >
          Search ⌘K
        </div>
      </div>
    </div>
  )
}

export default NavSearch
