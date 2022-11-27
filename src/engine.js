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
  // loop through all md files
  const articles = files.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    // construct a file path
    const filePath = path.join(articlesDirectory, fileName)
    // read that file
    const fileContent = fs.readFileSync(filePath, 'utf8')
    // scrape/parse the frontmatter from the file
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

export const getIDs = () => {
  const files = fs.readdirSync(articlesDirectory)
  return files.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getOneArticle = async (id) => {
  const filePath = path.join(articlesDirectory, `${id}.md`)
  const fileContent = await fs.readFileSync(filePath, 'utf8')
  const jsonContent = matter(fileContent)
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
