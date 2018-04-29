import initStoryshots, {
    multiSnapshotWithOptions,
    imageSnapshot
} from "@storybook/addon-storyshots";
import path from "path";

initStoryshots({
    suite: "Storyshots",
    integrityOptions: { cwd: __dirname },
    test: multiSnapshotWithOptions({})
});

const getMatchOptions = ({ context: { fileName } }) => {
    const customSnapshotsDir = `${fileName.slice(
        0,
        fileName.lastIndexOf("/")
    )}/__image_snapshots__`;

    return {
        customSnapshotsDir
    };
};

let storybookUrl = "http://localhost:9009";

if (process.env.CI) {
    storybookUrl = `file://${path.join(__dirname, "../storybook-static")}`;
}

initStoryshots({
    suite: "Image Storyshots",
    test: imageSnapshot({
        storybookUrl,
        getMatchOptions
    })
});
