const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {

            threshold:0.15

        }

);

document
.querySelectorAll(
".section,.project-card,.card,.timeline-item"
)
.forEach(element=>{

element.classList.add("fade-up");

observer.observe(element);

});