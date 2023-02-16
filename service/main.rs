use std::fs::File;
use std::io::prelude::*;
use encoding_rs::{Encoding, Encoder, Decoder};

fn main() -> std::io::Result<()> {
    let source_encoding = "ISO-8859-1"; // the encoding of the source file
    let target_encoding = "UTF-8"; // the encoding to convert to

    let source_file = File::open("source_file.txt")?;
    let mut source_reader = std::io::BufReader::new(source_file);
    let mut source_contents = Vec::new();
    source_reader.read_to_end(&mut source_contents)?;

    let (result, _encoding, _had_errors) = Encoding::for_label(source_encoding.as_bytes())
        .expect("Invalid encoding")
        .decode(&source_contents);

    let (target_contents, _, _) = Encoding::for_label(target_encoding.as_bytes())
        .expect("Invalid encoding")
        .encode(&result);

    let mut target_file = File::create("target_file.txt")?;
    target_file.write_all(&target_contents)?;

    Ok(())

    use std::str;
use base64;

fn main() {
    let encoded_string = "SGVsbG8gV29ybGQh"; // the Base64-encoded string
    let decoded_bytes = base64::decode(encoded_string).unwrap();
    let decoded_string = str::from_utf8(&decoded_bytes).unwrap();
    println!("The decoded string is: {}", decoded_string);
}

}
