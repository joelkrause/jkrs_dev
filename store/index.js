import fs from 'fs'
import axios from 'axios'

export const actions = {
  async nuxtServerInit ({
    commit
  }, {
    app
  }) {
    console.log('nuxt server init, yo')
    await axios.get('https://api.storyblok.com/v1/cdn/stories?starts_with=categories/&token=sZUcBEZiCUQNtT3CQAZrzgtt').then((res) => {
      const categories = res.data.stories
      const colors = []
      categories.forEach((cat) => {
        const text = `text-${cat.content.color_scheme}`
        const border = `border-${cat.content.color_scheme}`
        colors.push(text)
        colors.push(border)
      })
      fs.writeFile('./modules/classes.json', JSON.stringify(colors), (err) => {
        if (err) {
          console.error('Error writing fragmentTypes file', err)
        }
      })
    })
  }
}
