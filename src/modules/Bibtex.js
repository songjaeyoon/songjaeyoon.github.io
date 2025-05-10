import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Bibtex = ({ pub }) => {
    const [bibtex, setBibtex] = useState("");
    const [buttonText, setButtonText] = useState("Copy BibTeX");

    useEffect(() => {
        const newBibtex = getBibtex();
        setBibtex(newBibtex);
    }, [pub]);

    const copyBibtex = () => {
        navigator.clipboard.writeText(bibtex);
        setButtonText("Copied ✅");

        setTimeout(() => {
            setButtonText("Copy BibTeX");
        }, 2000);
    };

    const getBibtex = () => {
        let bibId = "";
        let authorText = "";
        for (let i = 0; i < pub?.authors.length; i++) {
            const author = pub?.authors[i];
            const names = author.split(" ");
            if (names.length === 2) {
                authorText += `${names[1]}, ${names[0]}`;
            } else if (names.length === 3) {
                authorText += `${names[2]}, ${names[0]} ${names[1]}`;
            }

            if (i !== pub?.authors.length - 1) {
                authorText += " and ";
            }

            // id
            if (i === 0) {
                bibId += names[1].toLowerCase();
            }
        }
        bibId += pub?.year + pub?.id;

        if (pub?.preprint) {
            return `@article{${bibId},
    title={${pub?.title}},
    author={${authorText}},
    journal={${pub?.preprint}},
    year={${pub?.year}}
}`;
        } else if (pub?.conference) {
            return `@inproceedings{${bibId},
    title={${pub?.title}},
    author={${authorText}},
    booktitle={${pub?.conference?.full}},
    year={${pub?.year}}
}`;
        } else if (pub?.journal) {
            return `@article{${bibId},
    title={${pub?.title}},
    author={${authorText}},
    journal={${pub?.journal?.title}},${
                pub?.journal?.volume
                    ? `
    volume={${pub?.journal?.volume}},`
                    : ""
            }${
                pub?.journal?.page
                    ? `
    pages={${pub?.journal?.page}},`
                    : ""
            }
    year={${pub?.year}},
    ${pub?.journal?.publisher ? `publisher={${pub?.journal?.publisher}},` : ""}
}`;
        }
    };

    return (
        <div className="mb-5 pb-5">
            <Button className="my-2" onClick={copyBibtex} size="sm">
                {buttonText}
            </Button>
            <pre
                style={{ backgroundColor: "#efefef", padding: "1rem" }}
                id="bibtex"
            >
                {bibtex}
            </pre>
        </div>
    );
};
export default Bibtex;
