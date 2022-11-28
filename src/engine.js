import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import html from 'remark-html'
import { remark } from 'remark'

// define the `articles` directory
const articlesDirectory = path.join(process.cwd(), 'src/articles')

export const getSortedArticles = () => {
  // read that directory and access all md files
  const files = fs.readdirSync(articlesDirectory)
  // loop through each md file
  const articles = files.map((fileName) => {
    // define `id` as the filename without file extension
    const id = fileName.replace(/\.md$/, '')
    // construct the file path
    const filePath = path.join(articlesDirectory, fileName)
    // read that file
    const fileContent = fs.readFileSync(filePath, 'utf8')
    // scrape / parse the frontmatter from that file
    const jsonContent = matter(fileContent)

    return {
      id,
      ...jsonContent.data,
    }
  })

  return articles.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// called by getStaticPaths for obtaining dynamic routes
export const getIDs = () => {
  // read the articles directory and access all md files
  const files = fs.readdirSync(articlesDirectory)
  // loop through each md file
  return files.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getOneArticle = async (id) => {
  // construct the file path
  const filePath = path.join(articlesDirectory, `${id}.md`)
  // read that file
  const fileContent = await fs.readFileSync(filePath, 'utf8')
  // scrape / parse the frontmatter from that file
  const jsonContent = matter(fileContent)
  // generate HTML elements
  const htmlContent = (await remark().use(html).process(jsonContent.content)).toString()

  return {
    id,
    htmlContent,
    ...jsonContent.data,
  }
}

// return allarticles.sort(({ date: a }, { date: b }) => {
//   if (a < b) {
//     return 1
//   } else if (a > b) {
//     return -1
//   } else {
//     return 0
//   }
// })
