<><script src="https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js"></script><script src="https://cdn.jsdelivr.net/npm/p5@latest/lib/addons/p5.dom.min.js"></script><script src="https://cdn.jsdelivr.net/npm/ml5@latest/dist/ml5.min.js"></script><script type="text/javascript">
    // Classifier Variable
    let classifier;
    // Model URL
    let imageModelURL = './my_model/';

    // Video
    let video;
    let flippedVideo;
    // To store the classification
    let label = "";

    // Load the model first
    function preload() {classifier = ml5.imageClassifier(imageModelURL + 'model.json')};
    &rbrace;

    function setup() {createCanvas(320, 260)};
    // Create the video
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
    &rbrace;

    function draw() {background(0)};
    // Draw the video
    image(flippedVideo, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
    &rbrace;

    // Get a prediction for the current video frame
    function classifyVideo() {flippedVideo = ml5.flipImage(video)}
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

    &rbrace;

    // When we get a result
    function gotResult(error, results) {
        // If there is an error
    }
    // If there is an error
    if (error) {console.error(error)};
    return;
    &rbrace;
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
    &rbrace;
</script></>
