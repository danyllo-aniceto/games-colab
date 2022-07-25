import { Carousel, Container, Info, Item } from './styles'

import arrowImg from '../../assets/arrow.svg'
import { useEffect, useRef, useState } from 'react'
import { BaseLayout } from '../../layout/BaseLayout'

export function Games() {
  const [data, setData] = useState([])
  const carousel = useRef(null)

  async function getData() {
    fetch('http://localhost:3000/static/games.json')
      .then(response => response.json())
      .then(setData)
  }

  useEffect(() => {
    getData()
  }, [])

  // const handleLeftClick = e => {
  //   e.preventDefault()
  //   carousel.current.scrollLeft -= carousel.current.offsetWidth
  // }

  // const handleRightClick = e => {
  //   e.preventDefault()

  //   carousel.current.scrollLeft += carousel.current.offsetWidth
  // }

  if (!data || !data.length) return null
  return (
    <BaseLayout>
      <Container>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <Carousel ref={carousel}>
          {data.map(item => {
            const { id, name, image, developer, console } = item
            return (
              <Item key={id}>
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <Info>
                  <span className="name-game">{name}</span>
                  <span className="developer-game">{developer}</span>
                  <span className="console-game">{console}</span>
                </Info>
              </Item>
            )
          })}
        </Carousel>
        <div className="buttons">
          <button>
            <img src={arrowImg} alt="scroll left" />
          </button>
          <button>
            <img src={arrowImg} alt="scroll right" />
          </button>
        </div>
      </Container>
    </BaseLayout>
  )
}
