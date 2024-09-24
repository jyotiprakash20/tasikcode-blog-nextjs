interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Hacktoberfest 2024',
    description: `Open collaborative event to embrace contribution to open source project.`,
    imgSrc: '/static/images/google.png',
    href: 'https://hacktoberfest.com',
  },
]

export default projectsData
