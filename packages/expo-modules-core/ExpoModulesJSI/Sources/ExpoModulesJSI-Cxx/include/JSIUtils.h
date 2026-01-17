// Copyright 2022-present 650 Industries. All rights reserved.

#pragma once
#ifdef __cplusplus

#include "jsi.h"
#include "HostFunctionClosure.h"

namespace jsi = facebook::jsi;

namespace expo {

inline jsi::Value valueFromFunction(jsi::Runtime &runtime, const jsi::Function &function) {
  return jsi::Value(runtime, function);
}

// `jsi::Object::setProperty` is a template function that Swift does not support. We need to provide specialized versions.
inline void setProperty(jsi::Runtime &runtime, const jsi::Object &object, const char *name, bool value) {
  object.setProperty(runtime, name, value);
}

inline void setProperty(jsi::Runtime &runtime, const jsi::Object &object, const char *name, double value) {
  object.setProperty(runtime, name, value);
}

inline void setProperty(jsi::Runtime &runtime, const jsi::Object &object, const char *name, const jsi::Value value) {
  object.setProperty(runtime, name, value);
}

inline void setValueAtIndex(jsi::Runtime &runtime, const jsi::Array &array, size_t index, const jsi::Value value) {
  array.setValueAtIndex(runtime, index, value);
}

inline jsi::Value valueFromArray(jsi::Runtime &runtime, const jsi::Array &array) {
  return jsi::Value(runtime, array);
}

inline const jsi::Value valueFromError(jsi::Runtime &runtime, const jsi::JSError &error) {
  return jsi::Value(runtime, error.value());
}

inline std::shared_ptr<const jsi::Buffer> makeSharedStringBuffer(const std::string &source) noexcept {
  return std::make_shared<jsi::StringBuffer>(source);
}

inline jsi::Function createHostFunction(jsi::Runtime &runtime, const char *name, HostFunctionClosure *closure) {
  jsi::PropNameID propName = jsi::PropNameID::forAscii(runtime, name);
  return jsi::Function::createFromHostFunction(runtime, propName, 0, [closure](jsi::Runtime &runtime, const jsi::Value &thisValue, const jsi::Value *_Nonnull args, size_t count) -> jsi::Value {
    return closure->call(thisValue, args, count);
  });
}

} // namespace expo

#endif // __cplusplus
