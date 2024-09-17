// import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import DOMPurify from "dompurify";
import CommentSection from "../Common_Components/Comment_Section/CommentSection";
import { useEffect } from "react";
function MedicoBlogs(Data) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const createMarkup = () => {
    const editorContent = `<p><strong>Common types of immunotherapies</strong> include:</p>
<ul>
  <li><strong>Immune checkpoint therapy</strong></li>
  <li><strong>Chimeric Antigen Receptor (CAR) T cell therapy</strong></li>
  <li><strong>Monoclonal antibodies</strong></li>
</ul>

<p>Researchers are exploring many <strong>innovative applications of immunotherapy</strong>, including:</p>
<ul>
  <li>Preventing cancer</li>
  <li>Treating rare cancer types</li>
  <li>Making existing cancer treatments more effective</li>
</ul>

<p>We spoke with three <strong>MD Anderson researchers</strong> who will present their <strong>groundbreaking immunotherapy research</strong> at the <strong>2024 European Society for Medical Oncology (ESMO) Congress</strong>.</p> <h2><a href="#">Immunotherapy for Prevention</a></h2>
<p>Most lung cancers are detected at later stages when they’re harder to treat. One way that researchers are tackling this problem is interception. “Interception means moving the intervention as early as possible, potentially even catching the disease before it becomes cancer,” says <strong>Jianjun Jay Zhang, M.D., Ph.D.</strong>, professor of Thoracic/Head and Neck Medical Oncology.</p>

<p>People who smoke or who have smoked may be eligible for lung cancer screening. When screening or a CT scan detects nodules in the lung that may be precancerous, there’s the question of next steps. Although the current recommendation is often just to wait and watch, there’s a strong argument for trying to treat these nodules before they become cancer.</p>

<p>“Looking at the underlying biology, the nodules’ molecular profiles are much simpler,” says Zhang. “They don’t have as many mutations as cancer cells, which may make them easier to treat. Patients’ immune systems tend to be more active as well.”</p>

<p>Zhang and others are taking advantage of these characteristics for something called <strong>immunoprevention</strong>. This means using immunotherapy to target invasive lung cancer precursors and prevent them from developing into cancer.</p>

<p>Some of the immunotherapies they’re looking at target adaptive immunity, while others target innate immunity. Innate immunity, which involves types of white blood cells like macrophages and neutrophils, is like a rapid response team that moves in as soon as the immune system is activated. Adaptive immunity, which involves white blood cells like T cells, is composed of specialized cells that need some training to learn what to target. Our immune systems coordinate the two types of response.</p>

<p>In one clinical trial, patients with pre-cancer lung nodules took pembrolizumab, a common immunotherapy drug. Pembrolizumab is a PD-L1 inhibitor, meaning it makes it easier for T cells to target the pre-cancer cells. “This trial had promising results for some patients,” notes Zhang, “But for many patients, it’s too early for adaptive immunity.” For pre-cancers, targeting the transition from innate to adaptive immunity may work better.</p>

<p>A second clinical trial, which is still ongoing, is looking at a drug called <strong>canakinumab</strong>. Canakinumab is an interleukin-1 beta (IL-1β) inhibitor. “It works to balance the innate immunity so that the adaptive immunity, like T cells, will become more activated,” says Zhang. “This rebalances the innate and adaptive immunity so that we can have a better coordination between these two responses.”</p>

<p>Zhang is also looking at other targets that could serve as checkpoints for both innate and adaptive immunity. “Our end goal is to leverage the treatable characteristics of the pre-cancer to prevent it from becoming an invasive cancer,” Zhang says.</p>

<h2><a href="#">Immunotherapy to Treat Rare Cancers</a></h2>
<p><strong>Clear cell sarcomas</strong> are a very rare subtype of soft tissue sarcoma. “Even for sarcoma medical oncologists, this is a rare disease,” says <strong>Elise Nassif Haddad, M.D., Ph.D.</strong>, assistant professor of Sarcoma Medical Oncology.</p>

<p>There is currently no standard of care for clear cell sarcomas. “These tumors don't respond to chemotherapy, standard immunotherapy, or any targeted therapies. They really have no good treatment right now,” notes Nassif Haddad. Part of what makes them hard to treat is that they’re usually immune-low tumors, meaning there are no immune cells in the tumor microenvironment.</p>

<p>For treatment ideas, researchers turned to another rare cancer type, <strong>uveal melanomas</strong>. “Uveal melanomas, unlike other melanomas, don't respond to typical immunotherapies,” says Nassif Haddad. In 2022, the FDA approved <strong>tebentafusp</strong>, a new immunotherapy drug, to treat uveal melanoma, following studies showing that it prolonged patients’ lives.</p>

<p>Tebentafusp is a bispecific T cell engager that targets Gp100, a peptide found in high quantities in uveal melanoma cells. It’s called bispecific because it has two targets: T cells and the Gp100 peptide. It works by attaching to a T cell and then bringing that T cell with it while it searches for Gp100. As a result, it brings more T cells into the tumor microenvironment, where they can recognize and target the cancer cells.</p>

<p>Gp100 is also sometimes used as a biomarker to help diagnose clear cell sarcomas. Nassif Haddad’s team thought, “Well, if it works for one very rare type of cancer that doesn’t respond to standard immunotherapy, uveal melanomas, then maybe it could be a target for another — clear cell sarcomas.”</p>

<p>The team looked at tissue samples from clear cell sarcoma patients and found that 72% of them tested positive for expression of Gp100. Although these are early results, they are promising for the therapeutic potential of tebentafusp for clear cell sarcomas. “It can be difficult to push research forward for rare disease types. We’re very excited that there’s real potential for developing a new treatment for this disease,” says Nassif Haddad.</p>

<h2><a href="#">Making Immunotherapies More Effective for More Patients</a></h2>
<p>While immunotherapy works effectively for about 60% of patients with cancer, the other 40% do not benefit from it. “So, there’s a great interest in figuring out new ways that we can help reprogram patients’ immune systems to target cancer,” says <strong>Adam Grippin, M.D., Ph.D.</strong>, resident in Radiation Oncology.</p>

<p>One area of interest is <strong>personalized mRNA vaccines</strong>. To create an mRNA vaccine, researchers take mRNA, or messenger RNA, and attach it to a nanoparticle. When someone receives the vaccine, the immune system detects the particles, and, thinking they’re virus-like particles, activates immune cells throughout the whole body, including in the tumor.</p>

<p>“Overall, a personalized mRNA vaccine is likely going to be the most effective for patients, but we are decades away from personalized vaccines being widely available,” Grippin says. Fortunately, Grippin’s previous data suggested that many of the benefits of this therapy may not be due to the personalization of the vaccine. “We think a lot of it is actually because the mRNA itself is a really potent activator of the immune system,” explains Grippin.</p>

`;
    return { __html: DOMPurify.sanitize(editorContent) }; // Sanitize the HTML
  };
  const images = [
    {
      url: "https://www.buddhacancer.com/buddha-blogs/images/Cancer-prevention.png",
    },
    {
      url: "https://sahyadrihospital.com/wp-content/uploads/2023/12/Oral-Cancer-Stages.jpg",
    },
    {
      url: "https://www.americanoncology.com/static/uploads/33202f68-8bd5-44dd-8324-ff9cdc7739b2-1726471103004.png",
    },
  ];
  return (
    <div className="w-8/12 mx-auto flex flex-col gap-y-8 my-28">
      <h1 className="text-Start text-4xl my-5 font-bold">
        Key Gastrointestinal Symptoms & Early Warning Signs of GI Cancers
      </h1>
      <div className=" flex justify-center gap-y-8 flex-col mx-auto ">
        <div className="mx-auto">
          <SimpleImageSlider
            width={996}
            height={604}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
        <h1 className="text-center font-bold text-4xl my-5">
          Innovative directions in immunotherapy research
        </h1>

        <div className="mx-auto l" dangerouslySetInnerHTML={createMarkup()} />
        <CommentSection />
      </div>
    </div>
  );
}

export default MedicoBlogs;
