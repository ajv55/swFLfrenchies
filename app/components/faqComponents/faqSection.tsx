
import FaqAccordian from './faqAccodian'

export default function FaqSection() {


  return (
    <div className='w-full mt-28 mb-32 h-content flex gap-14 flex-col justify-center items-center'>
        <h1 className='text-center tracking-wide text-2xl lg:text-4xl lg:w-[60%]'>Welcome to the FAQ page for purchasing Frenchie Pitbull puppies. <span className='font-bold bg-gradient-to-tr from-blue-900 via-blue-500 to-blue-300 bg-clip-text text-transparent'>Here, we address common queries to ensure you have all the information you need before bringing home your new furry friend.</span></h1>
        <FaqAccordian   question='1. What is a Frenchie Pitbull?' answer='A Frenchie Pitbull is a crossbreed between a French Bulldog and an American Pitbull Terrier. They inherit characteristics from both parent breeds, resulting in a unique and adorable companion.'/>
        <FaqAccordian   question='2. What are the typical characteristics of Frenchie Pitbull puppies?' answer='Frenchie Pitbulls are known for their affectionate nature, loyalty, and playful demeanor. They often have a compact yet muscular build, distinctive facial features, and a charming personality.'/>
        <FaqAccordian   question='3. How big do Frenchie Pitbulls get?' answer='Frenchie Pitbulls typically range in size from medium to large, depending on the genetics inherited from their parent breeds. On average, they weigh between 20 to 40 pounds and stand around 12 to 18 inches tall at the shoulder.'/>
        <FaqAccordian   question='4. What is the temperament of Frenchie Pitbulls?' answer='Frenchie Pitbulls are known for their friendly and sociable nature. They are often affectionate with their family members, including children and other pets, making them excellent companions for families.'/>
        <FaqAccordian   question='5. How much exercise do Frenchie Pitbulls require?' answer='Frenchie Pitbulls are moderately active dogs that enjoy daily walks, playtime, and mental stimulation. However, they are also content to lounge around indoors with their family. Providing them with regular exercise and enrichment activities helps maintain their physical and mental well-being.'/>
        <FaqAccordian    question='6. What are the grooming needs of Frenchie Pitbulls?' answer='Frenchie Pitbulls have short coats that are relatively low-maintenance. Regular brushing helps remove loose hair and minimizes shedding. Additionally, occasional baths and nail trimming are essential to keep them clean and comfortable.'/>
        <FaqAccordian   question='7. Are Frenchie Pitbulls suitable for first-time dog owners?' answer='While every dog is unique, Frenchie Pitbulls can make great pets for first-time dog owners who are committed to providing proper training, socialization, and care. Their affectionate nature and adaptability to various living environments often make them a good choice for many families.'/>
        <FaqAccordian   question='8. How do I choose the right Frenchie Pitbull puppy for me?' answer={`When selecting a Frenchie Pitbull puppy, consider factors such as temperament, energy level, and compatibility with your lifestyle. It's essential to spend time with different puppies, interact with them, and observe their behavior to find the best match for your family.`}/>
    </div>
  )
}
