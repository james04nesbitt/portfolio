import React, { useState } from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
// Generate an array of random hearts
const generateHearts = (count = 15) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100, // percentage for left positioning
    delay: Math.random() * 5,  // random delay
    duration: 5 + Math.random() * 5, // random float/fall duration
  }));

const Maya = () => {
  const [open, setOpen] = useState(false);
  const [cardState, setCardState] = useState('initial'); // 'initial', 'yes', or 'no'
  const [noButtonText, setNoButtonText] = useState('No');
  const [noButtonStyle, setNoButtonStyle] = useState({});

  // We'll have an initial set of hearts, plus extra hearts when user says yes
  const heartsDataInitial = generateHearts(15);
  const heartsDataYes = generateHearts(30); // More hearts when yes is clicked

  // Open envelope
  const handleOpen = () => {
    setOpen(true);
  };

  // Yes: switch to 'yes' state and show falling hearts
  const handleYes = () => {
    setCardState('yes');
  };

  // No: randomize button position and rename
  const handleNo = () => {
    setCardState('no');
    setNoButtonText('no');
    const randomTop = Math.floor(Math.random() * 100); // 0-90%
    const randomLeft = Math.floor(Math.random() * 340); // 0-90%
    setNoButtonStyle({
      position: 'absolute',
      top: randomTop + '%',
      left: randomLeft + '%',
      transform: 'translate(-50%, -50%)',
    });
  };

  // Decide which hearts array to use
  const heartsToRender = cardState === 'yes' ? heartsDataYes : heartsDataInitial;

  return (
    <div style={styles.container}>
      {/* Floating or falling hearts */}
      <AnimatePresence>
        {heartsToRender.map((heart) => {
          // If yes: hearts fall from top to bottom
          // Else: hearts rise from bottom to top
          const initialPos = cardState === 'yes'
            ? { y: '-100vh', x: '-50%', opacity: 0 }
            : { y: '100vh', x: '-50%', opacity: 0 };
          const animatePos = cardState === 'yes'
            ? { y: '100vh', opacity: 1 }
            : { y: '-100vh', opacity: 1 }; // rise all the way

          return (
            <motion.div
              key={heart.id}
              initial={initialPos}
              animate={animatePos}
              exit={{ opacity: 0 }}
              transition={{
                // delay: heart.delay,
                duration: heart.duration,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{
                position: 'absolute',
                left: `${heart.left}%`,
                fontSize: '2rem',
                pointerEvents: 'none',
              }}
            >
              ❤️
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Envelope stage */}
      {!open && (
        <motion.div
          style={styles.envelopeContainer}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div style={styles.header}>To my beautiful, amazing, gorgeous, intelligent, perfect girlfriend Maya</div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.envelope}
            onClick={handleOpen}
          >
            <span role="img" aria-label="envelope" style={{ fontSize: '3rem' }}>✉️</span>
          </motion.div>
        </motion.div>
      )}

      {/* Card stage */}
      {open && (
        <motion.div
          style={styles.cardContainer}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div style={styles.card}>
            {/* Left side: show a gif if yes, placeholder if not */}
            <div style={styles.cardSideLeft}>
              {cardState === 'yes' ? (
                <img
                  src="https://media.giphy.com/media/25688FI5AUUVf04upZ/giphy.gif?cid=790b7611ugtlqwdfljmeopc0n3mb7dgsngvwmnlhgp8yp1lg&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  alt="Yay gif"
                  style={styles.image}
                />
              ) : (
                <img
                  src="/images/val.jpg"
                  alt="Maya and I"
                  style={styles.image}
                />
              )}
            </div>

            {/* Right side: show a picture before yes, none after */}
            <div style={styles.cardSideRight}>
              {cardState === 'yes' ? (
                <p style={styles.YayacursiveText}>Yayyy. Cant wait to see you on the 14th my love!💖</p>
              ) : (
                <>
                  <p style={styles.cursiveText}>Dear Maya, Will you be my Valentine?</p>
                  <img
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWltbWhpYWo4cndlZHI3YzlqdWFrYTlneDBsaGI1ZzYzcWdzc2J3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0GqFhyNd0Wmfo6sM/giphy.gif"
                    alt="Right side placeholder"
                    style={styles.image}
                  />
                </>
              )}

              {/* Buttons are hidden if yes is clicked */}
              {cardState !== 'yes' && (
                <div style={styles.buttonGroup}>
                  <button style={styles.button} onClick={handleYes}>Yes</button>
                  <button
                    style={{ ...styles.button, ...noButtonStyle }}
                    onClick={handleNo}
                  >
                    {noButtonText}
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundColor: '#ffc0cb',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Brush Script MT, cursive', // cursive for all text
  },
  envelopeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
  },
  envelopeText: {
    marginBottom: '20px',
    fontSize: '1.5rem',
    color: 'pink',
  },
  header: {
    marginBottom: '20px',
    fontSize: '3rem',
    color: "red",
  },
  envelope: {
    width: '200px',
    height: '120px',
    backgroundColor: '#fff',
    border: '2px solid #000',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: '1000px',
    padding: '0 20px',
    width: '100%',
    maxWidth: '600px',
  },
  card: {
    width: '100%',
    maxWidth: '600px',
    height: '350px', // bigger card
    backgroundColor: '#fff',
    display: 'flex',
    borderRadius: '8px',
    boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
    overflow: 'hidden',
  },
  cardSideLeft: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe4e1',
  },
  cardSideRight: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
    padding: '10px',
  },
  placeholderText: {
    fontSize: '1rem',
    color: '#888',
    textAlign: 'center',
    margin: '0 10px',
  },
  cursiveText: {
    fontSize: '1.3rem',
    marginBottom: '20px',
    textAlign: 'center',
    margin: '0 10px',
    color: '#AA336A'
  },
  YayacursiveText: {
    fontSize: '1.7rem',
    marginBottom: '20px',
    textAlign: 'center',
    margin: '0 10px',
    color: '#AA336A'
  },
  buttonGroup: {
    position: 'relative',
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    cursor: 'pointer',
    padding: '8px 16px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ff69b4',
    color: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  image: {
    maxWidth: '90%',
    maxHeight: '50%',
    objectFit: 'cover',
    marginTop: '10px',
  },
};

export default Maya;
