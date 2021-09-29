import React, {Component, SyntheticEvent, useEffect, useState} from 'react';
import './landing.scss';
import {TCarousel} from '../../types/models';
import {useKeenSlider} from "keen-slider/react"


type LandingProps = {}

function Landing(props: LandingProps) {

    const [carouselItems, setCarouselItems] = useState<TCarousel[]>([])
    const [ref, slider] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    const [currentSlide, setCurrentSlide] = React.useState(0)

    async function getCarouselItems() {
        const response = await fetch('/api/carousels')
        return response.json()
    }

    useEffect(() => {
        getCarouselItems().then(res => {
            console.log('carousel -> ', res.carousel_items)
            setCarouselItems(res.carousel_items)
        })
    }, [])

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault()

        alert("DONE")
    }

    return (
        <div className="landing">
            <div className="container">
                <section className="carousel-section">
                    <div ref={ref} id={'mebelli-carousel'} className="keen-slider">
                        {carouselItems?.length && carouselItems.map(carousel => (
                            <div className="keen-slider__slide carousel-section-item" key={carousel._id}>
                                <div className="carousel-item-image"
                                     style={{backgroundImage: `url(${carousel.imageUrl})`}}>
                                    <p className="carousel-item-text carousel-item-title">{carousel.title}</p>
                                    <p className="carousel-item-text carousel-item-description">{carousel.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {slider && (
                        <>
                            <ArrowLeft
                                onClick={(e:any) => e.stopPropagation() || slider.prev()}
                                disabled={currentSlide === 0}
                            />
                            <ArrowRight
                                onClick={(e:any) => e.stopPropagation() || slider.next()}
                                disabled={currentSlide === slider.details().size - 1}
                            />
                        </>
                    )}
                </section>
                <section className={"bestseller"}>
                    bestseller
                </section>
            </div>
        </div>
    );
}

export default Landing;


function ArrowLeft(props: any) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--left" + disabled}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
        </svg>
    )
}

function ArrowRight(props: any) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--right" + disabled}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
        </svg>
    )
}
