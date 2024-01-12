import { Grid } from '@mui/material'
import React from 'react'

const HomePage = () => {
  const blogs = [
    {
      "title": "Blog 1",
      "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, ad?"
    },
    {
      "title": "Blog 2",
      "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, adLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, adLorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, ad ?"
    },
    {
      "title": "Blog 3",
      "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, ad?"
    },
    {
      "title": "Blog 4",
      "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, ad?"
    },
  ]
  return (
    <>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {blogs.map((item, index) => {
          return (
            <>
              <Grid item xs={2} sm={4} md={4} key={index}>
                <h4>
                  {item.title}
                  </h4>
                <p>
                  {item.desc}
                  </p>
              </Grid>
            </>

          )
        })}

      </Grid>

    </>
  )
}

export default HomePage