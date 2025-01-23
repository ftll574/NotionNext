import { siteConfig } from '@/lib/config'

const Nav = () => {
  const showNavButtons = siteConfig('STARTER_NAV_BUTTON_ENABLE')
  
  return (
    <nav>
      {/* ... existing nav items ... */}
      
      {showNavButtons && (
        <div className="nav-buttons">
          <a 
            href={siteConfig('STARTER_NAV_BUTTON_1_URL')}
            className="nav-button"
          >
            {siteConfig('STARTER_NAV_BUTTON_1_TEXT')}
          </a>
          
          <a
            href={siteConfig('STARTER_NAV_BUTTON_2_URL')} 
            className="nav-button"
          >
            {siteConfig('STARTER_NAV_BUTTON_2_TEXT')}
          </a>
        </div>
      )}
    </nav>
  )
}

export default Nav 