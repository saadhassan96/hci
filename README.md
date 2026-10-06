# Human–Computer Interaction · Fall 2026

Course website for CMPS 4330 / CMPS 6330: Human–Computer Interaction at Tulane University.

- Live site: https://saadh.info/hci/
- [Schedule](https://saadh.info/hci/schedule/) · [Project](https://saadh.info/hci/project/) · [Teams](https://saadh.info/hci/teams/) · [Syllabus](https://saadh.info/hci/syllabus/)
- Previous course site (Jekyll): [archive/previous-site](archive/previous-site/)
- Instructor: [Saad Hassan](https://saadh.info)

## Run locally

The repo holds the built static site, so there is no build step. Pages load
files from `/hci/`, so serve the folder that contains `hci/`:

```
cd ..
python3 -m http.server 8000
```

Then visit http://localhost:8000/hci/.

Pushing to `main` publishes the site with GitHub Pages at saadh.info/hci/.

## License

Code is under the MIT License. Course materials, text, and images are
copyright Saad Hassan, all rights reserved. See [LICENSE](LICENSE).
