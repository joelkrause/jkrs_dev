const axios = require('axios')

export default async function generateColors() {
    const colors = []
    await axios.get('https://api.storyblok.com/v1/cdn/stories?starts_with=categories/&token=sZUcBEZiCUQNtT3CQAZrzgtt').then(res => {
        const categories = res.data.stories
        categories.forEach(cat => {
            const text = `text-${cat.content.color_scheme}`
            const border = `border-${cat.content.color_scheme}`
            colors.push(text)
            colors.push(border)
        })
    })
    return colors;
}