interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'A Shopify Website',
    description: `A Shopify Ecommerce website built for selling products, digital
    marketing.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Python Password Generator',
    description: `A project I cheffed up to create secure passwords that follow the
    guidelines outlined by the user such as special characters, length, etc and `,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/ojpushpull/jay4',
  },
]

export default projectsData
