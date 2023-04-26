// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { publickRoutes } from "~/routers"

import DefaultLayout from "~/Default"
import { Fragment } from "react";

function App() {
  // const [navRoute, setNavRoute] = useState(false)
  return (
    <Router>
      <div className="App">
        <Routes>
          {publickRoutes.map((router, index) => {

            const Pages = router.component
            let PageNav
            let pathnav
            
            let Layout = DefaultLayout
            if (router.layout) {
              Layout = router.layout
            } else if (router.layout === null) {
              Layout = Fragment
            }
            
            if (router.naviteams) {
              PageNav = router.naviteams.navComponent

              pathnav = router.naviteams.pathnav
            }
            return (
              <Route key={index} path={router.path} element={
                <Layout>
                  <Pages />
                </Layout>
              }
              >
                {router.naviteams ? <Route path={pathnav} element={<PageNav />}/>: undefined}
              </Route>

            )
          })}



        </Routes>
      </div>
    </Router>
  )
}

export default App;
