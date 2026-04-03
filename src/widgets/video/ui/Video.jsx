import styles from './Video.module.scss';
import Container from '@/shared/ui/Container/Container';
import Headline from '@/shared/ui/Headline/Headline';

const Video = () => {
  return (
    <section className={styles.videoSection}>
      <Container size="default">
        <Headline
          supertitle="О сервисе"
          title=""
          desc="Посмотрите 18-ти минутное видео с демонстрацией программы"
        />
        <div
          style={{
            position: 'relative',
            paddingTop: '56.25%',
            width: '100%',
            zIndex: '3',
          }}
        >
          <iframe
            src="https://kinescope.io/embed/5C6qG8QxD9eLfSeKzzkf5p"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
            frameBorder="0"
            allowFullScreen
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              zIndex: 3,
            }}
          />
        </div>
      </Container>
      <div className={styles.videoBlurRight} />
      <div className={styles.videoBlurLeft} />
      <div className={styles.videoBlurDown} />
    </section>
  );
};

export default Video;
