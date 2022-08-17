import styles from './style.module.css'
import { Carousel, Modal } from 'antd'
import Brain3_1 from '../../../asset/brain3.png'
import Brain3_2 from '../../../asset/brain3-1.png'
import Brain3_3 from '../../../asset/brain3-2.png'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const mriDetails = [
  {
    img: Brain3_1,
    date: '[2021.08.15]',
    content: '서울대학교 병원 / 7T / Philips',
  },
  {
    img: Brain3_2,
    date: '[2021.08.15]',
    content: '서울대학교 병원 / 7T / Philips',
  },
  {
    img: Brain3_3,
    date: '[2021.08.15]',
    content: '서울대학교 병원 / 7T / Philips',
  },
]

function DimentiaModal({ name, visibe, onClose }) {
  return (
    <Modal
      okText={'데이터 등록'}
      cancelText="취소"
      title={`MRI 데이터 선택: ${name}`}
      visible={visibe}
      onCancel={onClose}
      bodyStyle={{ background: '#364d79' }}
    >
      <div>
        <div className="body">
          <Carousel>
            {mriDetails.map(({ img, date, content }) => {
              return (
                <div style={contentStyle} className={styles.carouselBody}>
                  <img src={img} alt="brain" />
                  <div className={styles.content}>
                    <div>{date}</div>
                    <div>{content}</div>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </Modal>
  )
}

export default DimentiaModal