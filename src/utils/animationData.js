export const AnimationData = {

    slideUpDelay: {
        initial: { y: "50%", opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 1,
        },
    },

    slidDownDelay: {
        initial: { y: "-50%", opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 1,
        },
    },
};