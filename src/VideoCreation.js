
const DatabaseViewer = {
    Video1: 'https://www.youtube.com/embed/3IUda0_mxI8',
    Video1_Slow: 'https://www.youtube.com/embed/tVk4--J740I',
    Video1_Medium: 'https://www.youtube.com/embed/RPV2uE3EPqw',
    Video1_Fast: 'https://www.youtube.com/embed/i7j4fWUYOOQ',

    Video2: 'https://www.youtube.com/embed/SDSwDvv7er4',
    Video2_Slow: 'https://www.youtube.com/embed/y2Xkk_ay_Pc',
    Video2_Medium: 'https://www.youtube.com/embed/YoH7MLVX64Q',
    Video2_Fast: 'https://www.youtube.com/embed/rqsWyUJ3DuI',

    Video3: 'https://www.youtube.com/embed/gLf-l9vjvPE',
    Video3_Slow: 'https://www.youtube.com/embed/YPnST__rbnA',
    Video3_Medium: 'https://www.youtube.com/embed/UQivHWpLjFA',
    Video3_Fast: 'https://www.youtube.com/embed/phPzogVqOzw',
}

const DatabaseDownloader = {


    Video1: 'https://drive.google.com/u/0/uc?id=1viREpxdmS_qX9YpEgZQTw4rIKN27Vqdt&export=download',
    Video1_Slow: 'https://drive.google.com/u/0/uc?id=1FQ4Pirr9HybEKTD3HiEDG5R5TJDDqAZ3&export=download',
    Video1_Medium: 'https://drive.google.com/u/0/uc?id=1uQrIDBubw9Uwwc1Q5tz4qPZQB6hlhbMG&export=download',
    Video1_Fast: 'https://drive.google.com/u/0/uc?id=1WwMjHR-Twfuc-DyZ64_IZ7vdV7hKXb7Y&export=download',

    Video2: 'https://drive.google.com/u/0/uc?id=1Vbn3obr-JhwveNPm3V4JIYfVGHASle1u&export=download',
    Video2_Slow: 'https://drive.google.com/u/0/uc?id=1CGChjpMNRNpunungiCPYEg4zzONy08vk&export=download',
    Video2_Medium: 'https://drive.google.com/u/0/uc?id=1vQF7ZJKQqiDZAQLahpoJ-x4VBClq96oT&export=download',
    Video2_Fast: 'https://drive.google.com/u/0/uc?id=1tYDQodsCLy7PhII8ziqAxYswAmfJdaNW&export=download',

    Video3: 'https://drive.google.com/u/0/uc?id=1gUbJlrUIqlESwweqWdLIjAoNf-wCbzwd&export=download',
    Video3_Slow: 'https://drive.google.com/u/0/uc?id=1VV_1A8pkzjXWzhvvMRXrgtw9tOBcN_s6&export=download',
    Video3_Medium: 'https://drive.google.com/u/0/uc?id=1CgOx-G7AlBN9o0rQmr0dzBL38AY904yX&export=download',
    Video3_Fast: 'https://drive.google.com/u/0/uc?id=1vBw4oGyzVtSHxjpfJoITfmqyXfKppocO&export=download',
}

let TypeViewer = {
    Slow: "",
    Medium: "",
    Fast: "",
}

let TypeDownloader = {
    Slow: "",
    Medium: "",
    Fast: "",
}

let downloadLink = '';


const VideoChosenResult = document.querySelector('.file-upload-result');
const VideoUploaderForm = document.querySelector('#VideoUpladerForm');
const VideoParametrizationSection = document.querySelector('#VideoParametrization');
const VideoPlayer = document.querySelector('#VideoParametrization>iframe');
const VideoTitle = VideoParametrizationSection.querySelector('h2');

const RadioButtons = document.querySelectorAll('.parameterController>input')
const ParametrizationsSections = document.querySelectorAll('#VideoParametrization>div>section')
const ParametrizationScreen = document.querySelector('.speedSelection');
const ConfirmationScreen = document.querySelector('.confirmation');
const VolumenScreen = document.querySelector('.volumeModifier');
const SaveScreen = document.querySelector('.saveScreen');


let Video = null;
let VideoName;
let VideoCategory;

let Answer1 = 50;
let Answer2 = 50;
let Answer3 = 50;
let Answer4 = 50;
let Answer5 = 50;

const VideoChosen = (event) => {
    if (VideoChosenResult) VideoChosenResult.textContent = event.target.files[0].name;
    if (event.target.files[0]) Video = event.target.files[0];

}

const VideoNameEdition = (event) => {
    if (event.target.value) VideoName = event.target.value;
}

const VideoCategoryEdition = (event) => {
    if (event.target.value) VideoCategory = event.target.value;
}

const SuccesfulLoading = () => {

    if (!Video) return;
    if (VideoUploaderForm) VideoUploaderForm.classList.add('unlisted');
    if (VideoParametrizationSection) VideoParametrizationSection.classList.remove('unlisted');


    GenerateVariants(Video.name);
    if (VideoTitle) VideoTitle.innerText = VideoName;
}//Closes SuccesfulLoading method

const ResetTest = () => {
    GenerateVariants(Video.name);
    RadioButtons[0].checked = true;
    SectionSelected();
    ConfirmationScreen.classList.add('unlisted')
    ParametrizationScreen.classList.remove('unlisted');
}


const GenerateVariants = (videoFileName) => {

    if (videoFileName.includes("Video1")) {
        VideoPlayer.src = DatabaseViewer.Video1;

        TypeViewer.Slow = DatabaseViewer.Video1_Slow;
        TypeViewer.Medium = DatabaseViewer.Video1_Medium;
        TypeViewer.Fast = DatabaseViewer.Video1_Fast;

        TypeDownloader.Slow = DatabaseDownloader.Video1_Slow;
        TypeDownloader.Medium = DatabaseDownloader.Video1_Medium;
        TypeDownloader.Fast = DatabaseDownloader.Video1_Fast;

    } else if (videoFileName.includes("Video2")) {
        VideoPlayer.src = DatabaseViewer.Video2;

        TypeViewer.Slow = DatabaseViewer.Video2_Slow;
        TypeViewer.Medium = DatabaseViewer.Video2_Medium;
        TypeViewer.Fast = DatabaseViewer.Video2_Fast;

        TypeDownloader.Slow = DatabaseDownloader.Video2_Slow;
        TypeDownloader.Medium = DatabaseDownloader.Video2_Medium;
        TypeDownloader.Fast = DatabaseDownloader.Video2_Fast;

    } else if (videoFileName.includes("Video3")) {
        VideoPlayer.src = DatabaseViewer.Video3;

        TypeViewer.Slow = DatabaseViewer.Video3_Slow;
        TypeViewer.Medium = DatabaseViewer.Video3_Medium;
        TypeViewer.Fast = DatabaseViewer.Video3_Fast;

        TypeDownloader.Slow = DatabaseDownloader.Video3_Slow;
        TypeDownloader.Medium = DatabaseDownloader.Video3_Medium;
        TypeDownloader.Fast = DatabaseDownloader.Video3_Fast;

    }

}//closes GenerateVariants method


const FinishParametrization = () => {

    let result = (Answer1 + Answer2 + Answer3 + Answer4 + Answer5) / 5;


    if (result < 33.3) {
        VideoPlayer.src = TypeViewer.Slow;
        downloadLink = TypeDownloader.Slow;
    }
    else if (result > 66.6) {
        VideoPlayer.src = TypeViewer.Fast;
        downloadLink = TypeDownloader.Fast;
    }
    else {
        VideoPlayer.src = TypeViewer.Medium;
        downloadLink = TypeDownloader.Medium;
    }
    ParametrizationScreen.classList.add('unlisted');
    ConfirmationScreen.classList.remove('unlisted')
}
const SectionSelected = () => {


    for (let index = 0; index < RadioButtons.length; index++) {
        if (RadioButtons[index].checked)
            ParametrizationsSections[index].classList.remove("unlisted");
        else
            ParametrizationsSections[index].classList.add("unlisted");

    }
}


const NextSection = () => {

    let currentRadio = -1;
    for (let index = 0; index < RadioButtons.length; index++) {
        if (RadioButtons[index].checked) currentRadio = index;

    }

    if (currentRadio < RadioButtons.length - 1) {
        RadioButtons[currentRadio + 1].checked = true;
        SectionSelected();
    } else FinishParametrization();

}//Closes NextSection method

const MusicConfirmed = () => {
    ConfirmationScreen.classList.add("unlisted");
    VolumenScreen.classList.remove("unlisted");
}

const CreateMusic = () => {
    VolumenScreen.classList.add("unlisted");
    SaveScreen.classList.remove("unlisted");
}




const SaveMusic = () => {

    window.open(downloadLink);
}

const HandleAnswer1 = (value) => {

    Answer1 = Number(value);

}
const HandleAnswer2 = (value) => {


    Answer2 = Number(value);
}
const HandleAnswer3 = (value) => {

    Answer3 = Number(value);
}
const HandleAnswer4 = (value) => {

    Answer4 = Number(value);
}
const HandleAnswer5 = (value) => {

    Answer5 = Number(value);
}