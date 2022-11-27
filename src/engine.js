import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import html from 'remark-html'
import { remark } from 'remark'

const articlesDirectory = path.join(process.cwd(), 'src/articles')

export const getSortedArticles = () => {
  const files = fs.readdirSync(articlesDirectory)
  const articles = files.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const filePath = path.join(articlesDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf8')
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
  const fileContent = fs.readFileSync(filePath, 'utf8')
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
