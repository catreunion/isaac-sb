import { socialMedia } from '@/items/socialMedia'

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        {socialMedia.map((item) => (
          <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-base text-gray-400">&copy; 2023 a simple blog</p>
      </div>
    </div>
  )
}

export default Footer
