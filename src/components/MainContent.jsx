import blogImg1 from '../assets/imgs/blog-img-1.jpg';
import blogImg2 from '../assets/imgs/blog-img-2.jpg';
import blogImg3 from '../assets/imgs/blog-img-3.jpg';
import blogImg4 from '../assets/imgs/blog-img-4.jpg';
import blogImg5 from '../assets/imgs/blog-img-5.jpg';
import blogImg6 from '../assets/imgs/blog-img-6.jpg';
import blogImg7 from '../assets/imgs/blog-img-7.jpg';
import SectionTypeA from './SectionTypeA';
import SectionTypeB from './SectionTypeB';

const blogData = [
    {
        id: 1,
        smallHeading: "project 1",
        mainHeading: "Branding Nice Studio",
        content: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
        img: blogImg1

    },
    
{
    id: 2,
    smallHeading: "project 2",
    mainHeading: "Mobile Card App",
    content: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
    img: blogImg2

},
{
    id: 3,
    smallHeading: "project 3",
    mainHeading: "Resturant Landing page",
    content: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
    img: blogImg3

},
{
    id: 4,
    smallHeading: "project 4",
    mainHeading: "Essential UI Icon Pack",
    content: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
    img: blogImg4

},
{
    id: 5,
    smallHeading: "project 5",
    mainHeading: "Financial App Design",
    content: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
    img: blogImg5

},
{
    id: 6,
    smallHeading: "project 5",
    mainHeading: "Design Brand guidelines",
    content: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
    img: blogImg6

},
{
    id: 7,
    smallHeading: "project 7",
    mainHeading: "Flight Booking App",
    content: "The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.",
    img: blogImg7

}
]

const MainContent = function () {

    return (
        <>
            <main>
               {blogData.map((blog) =>
                    blog.id % 2 !== 0 ? (
                        <SectionTypeA key={blog.id} blog={blog} />
                    ) : (
                        <SectionTypeB key={blog.id} blog={blog} />
                    )
                )} 
            </main>
        </>
    )
}

export default MainContent;